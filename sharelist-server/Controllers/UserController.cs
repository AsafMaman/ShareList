using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ShareList.Core;
using ShareList.Core.Services;

namespace ShareList{
    [Route("api/[controller]")]
    public class UserController:Controller{
        private readonly IUserService _userService;
        public UserController(IUserService userService){
            _userService=userService;
        }

        public async Task<IActionResult> Post([FromBody]AppUser user){
            await _userService.CreateUserAsync(user);
            return Ok("Ok");
        }
    }
}