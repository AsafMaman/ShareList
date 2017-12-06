using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using ShareList.Core.Services;
using System.Threading.Tasks;
using ShareList.Core;

namespace ShareList{

     [Route("api/[controller]")]
    public class ListsController : Controller{
        private readonly IListService _listService;

        public ListsController(IListService listService){
            _listService=listService;
        }

        [Authorize(Policy="Member")]
        [HttpGet()]
        public async Task<IActionResult> GetAsync()
        {
            var userId=User.FindFirst("UserId").Value;
            var lists =await _listService.GetListsAsync(userId);
            return Ok(lists);
        }

        [Authorize(Policy="Member")]
        [HttpPost()]
        public async Task<IActionResult> PostAsync([FromBody] List list)
        {
            var userId=User.FindFirst("UserId").Value;
            list.UserId=userId;
            var temp=await _listService.AddListAsync(list);
            return Ok("list Created.");
        }
    }
}