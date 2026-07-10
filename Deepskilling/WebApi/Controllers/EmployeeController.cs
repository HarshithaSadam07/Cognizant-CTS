using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using FirstWebApi.Models;
using FirstWebApi.Filters;

namespace FirstWebApi.Controllers;

[ApiController]
[Route("[controller]")]
[Authorize]
[CustomExceptionFilter]
public class EmployeeController : ControllerBase
{
    [HttpGet]
    public ActionResult<List<Employee>> GetStandard()
    {
        return Ok(GetStandardEmployeeList());
    }

    [HttpPut("{id}")]
    public ActionResult<Employee> UpdateEmployee(int id, [FromBody] Employee employee)
    {
        if (id <= 0)
        {
            return BadRequest("Invalid employee id");
        }

        var employees = GetStandardEmployeeList();

        var existingEmployee = employees.FirstOrDefault(e => e.Id == id);

        if (existingEmployee == null)
        {
            return BadRequest("Invalid employee id");
        }

        existingEmployee.Name = employee.Name;
        existingEmployee.Salary = employee.Salary;
        existingEmployee.Permanent = employee.Permanent;
        existingEmployee.DateOfBirth = employee.DateOfBirth;
        existingEmployee.Department = employee.Department;
        existingEmployee.Skills = employee.Skills;

        return Ok(existingEmployee);
    }

    private List<Employee> GetStandardEmployeeList()
    {
        return new List<Employee>
        {
            new Employee
            {
                Id = 1,
                Name = "Harshitha",
                Salary = 50000,
                Permanent = true,
                DateOfBirth = new DateTime(2005, 1, 1),
                Department = new Department
                {
                    Id = 101,
                    Name = "IT"
                },
                Skills = new List<Skill>
                {
                    new Skill { Id = 1, Name = "C#" },
                    new Skill { Id = 2, Name = "SQL" }
                }
            }
        };
    }
}