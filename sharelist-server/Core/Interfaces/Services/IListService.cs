using System.Collections.Generic;
using System.Threading.Tasks;

namespace ShareList.Core.Services{
    public interface IListService{
        Task<IEnumerable<List>> GetListsAsync(string userId);
        Task<string> AddListAsync(List list);
    }
}