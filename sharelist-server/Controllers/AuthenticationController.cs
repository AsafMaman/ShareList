using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using ShareList.Core;
using ShareList.Core.Repositories;
using ShareList.Repository;

namespace ShareList{
    [Route("api/[controller]")]
    public class AuthenticationController : Controller
    {
        private readonly IUserRepository _userRepository;
        public AuthenticationController(IConfiguration configuration, IUserRepository userRepository){
            Configuration=configuration;
           _userRepository=userRepository; 
        }
        private IConfiguration Configuration { get; set;}

        // public AuthenticationController(IConfiguration configuration) => Configuration = configuration;

        [Route("Test")]
        public IActionResult Get(){
            return Ok("Test");
        }

        [AllowAnonymous]
        [Route("Token")]
        [HttpPost]
        public async Task<IActionResult> PostToken([FromBody] AppUser userRequest){
            var user=await _userRepository.GetUserAsync(userRequest);

            if(user ==null){
                return Unauthorized();
            }
            var claims=new []{
                new Claim(ClaimTypes.Name,user.UserName),
                new Claim("Membership","1"),
                new Claim("UserId",user.Id)
            };
        
            var securityKey=Configuration.GetSection("AppConfiguration:SecurityKey").Value;//Configuration.GetSection("AppConfiguration").GetSection("SecurityKey").Value;
            var key = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(securityKey));
            var creds = new SigningCredentials(key,SecurityAlgorithms.HmacSha256);

            var token=new JwtSecurityToken(
               issuer:"",
               audience:"http://localhost",
               claims:claims,
               expires:DateTime.Now.AddMinutes(30),
               signingCredentials:creds
            );
            return Ok(new {user=new{Id=user.Id,UserName=user.UserName,Email=user.Email}, token=new JwtSecurityTokenHandler().WriteToken(token)});
            // return Ok(new {user={ID=user.Id. UserName=user.UserName,Email=user.Email}, token=new JwtSecurityTokenHandler().WriteToken(token)});
        }
        
       public IActionResult RegisterUser([FromBody] AppUser user){
           return Ok("");
       }
        [HttpGet("User/{userName}")]
       public async Task<string> GetUser(string userName){
           var userFilter =new AppUser{UserName=userName};
           var user=await _userRepository.GetUserAsync(userFilter);
           return JsonConvert.SerializeObject(user);
       }
    }
}