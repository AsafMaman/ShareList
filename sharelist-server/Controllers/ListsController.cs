using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using ShareList.Core.Services;
using System.Threading.Tasks;

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
    }
}