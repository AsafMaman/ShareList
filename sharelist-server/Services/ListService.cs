using System.Collections.Generic;
using System.Threading.Tasks;
using ShareList.Core;
using ShareList.Core.Repositories;
using ShareList.Core.Services;

namespace ShareList.Services{
    public class ListService:IListService{
        private readonly IListRepository _listRepository;
        public ListService(IListRepository listRepository){
            _listRepository=listRepository;
        }
        public async Task<IEnumerable<List>> GetListsAsync(string userId) => await _listRepository.GetListsAsync(userId);
        public async Task<string> AddListAsync(List list) =>await _listRepository.AddListAsync(list);
         
    }
}