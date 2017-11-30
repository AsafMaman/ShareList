using System.Threading.Tasks;

namespace ShareList.Core.Services{
    public interface IUserService{
        Task CreateUserAsync(AppUser appUser);
    }
}