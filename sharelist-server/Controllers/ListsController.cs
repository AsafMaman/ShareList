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
            await _listService.AddListAsync(list);
            return Ok("list Created.");
        }

        [Authorize(Policy="Member")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(string id)
        {
            // var userId=User.FindFirst("UserId").Value;
            // var list = new List{Id=id,UserId=userId};
            
            await _listService.DeleteListAsync(id);
            return Ok("list Created.");
        }
    }
}