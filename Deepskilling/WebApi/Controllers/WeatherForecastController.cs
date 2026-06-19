using Microsoft.AspNetCore.Mvc;

namespace FirstWebApi.Controllers
{
    [ApiController]
    [Route("Emp")]
    public class WeatherForecastController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var data = new[]
            {
                new
                {
                    Date = DateTime.Now.ToShortDateString(),
                    TemperatureC = 30,
                    Summary = "Sunny"
                },
                new
                {
                    Date = DateTime.Now.AddDays(1).ToShortDateString(),
                    TemperatureC = 28,
                    Summary = "Cloudy"
                }
            };

            return Ok(data);
        }
    }
}