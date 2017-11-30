using System.Threading.Tasks;
using ShareList.Core;

namespace ShareList.Core.Repositories
{
    public interface IUserRepository
    {
        Task<AppUser> GetUserAsync(AppUser user);
        Task CreateUserAsync(AppUser user);
    }
}