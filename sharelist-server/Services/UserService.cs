using System.Threading.Tasks;
using ShareList.Core;
using ShareList.Core.Repositories;
using ShareList.Core.Services;

namespace ShareList.Services{
    public class UserService:IUserService{
        private readonly IUserRepository _userRepository;
        public UserService(IUserRepository userRepository){
            _userRepository=userRepository;
        }
        public async Task<AppUser> GetUserAsync(AppUser user) => await _userRepository.GetUserAsync(user);
        public async Task CreateUserAsync(AppUser user) => await _userRepository.CreateUserAsync(user);
    }
}