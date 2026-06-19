using Microsoft.AspNetCore.Mvc;
using FirstWebApi.Models;
using FirstWebApi.Filters;

namespace FirstWebApi.Controllers;

[ApiController]
[Route("[controller]")]
[CustomAuthFilter]
[CustomExceptionFilter]
public class EmployeeController : ControllerBase
{
    [HttpGet]
    public ActionResult<List<Employee>> GetStandard()
    {
        // Testing Custom Exception Filter
        throw new Exception("Demo exception from Employee API");

        // Normal code (commented for testing)
        // return Ok(GetStandardEmployeeList());
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
                    new Skill
                    {
                        Id = 1,
                        Name = "C#"
                    },
                    new Skill
                    {
                        Id = 2,
                        Name = "SQL"
                    }
                }
            }
        };
    }
}