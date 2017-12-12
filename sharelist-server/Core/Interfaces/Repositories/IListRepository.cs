using System.Collections.Generic;
using System.Threading.Tasks;
using ShareList.Core;

namespace ShareList.Core.Repositories
{
    public interface IListRepository
    {
        Task<IEnumerable<List>> GetListsAsync(string userId);
        Task<string> AddListAsync(List list);
        Task<string> DeleteListAsync(string listId);
    }
}