using AuthService.Helpers;
using AuthService.Models;
using Microsoft.AspNetCore.Mvc;

namespace AuthService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly JwtTokenGenerator _tokenGenerator;

        private static readonly Dictionary<string, (string Password, string Role)> Users = new()
        {
            ["admin"] = ("Admin@123", "Admin"),
            ["sadwik"] = ("User@123", "User")
        };

        public AuthController(JwtTokenGenerator tokenGenerator)
        {
            _tokenGenerator = tokenGenerator;
        }

        [HttpPost("login")]
        public ActionResult<LoginResponse> Login([FromBody] LoginRequest request)
        {
            if (!Users.TryGetValue(request.Username, out var user) || user.Password != request.Password)
            {
                return Unauthorized("Invalid credentials.");
            }

            var token = _tokenGenerator.GenerateToken(request.Username, user.Role);
            return Ok(new LoginResponse { Token = token });
        }
    }
}
