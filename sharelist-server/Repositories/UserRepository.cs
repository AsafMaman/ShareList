using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using ShareList.Core;
using ShareList.Core.Repositories;

//using MongoDB.Bson;

namespace ShareList.Repository
{
    public class UserRepository:IUserRepository{
        
        private readonly IMongoCollection<AppUser> _usersCollection;
        public UserRepository(IOptions<Settings> settings,IDbContext DbContext)
        {
            _usersCollection=DbContext.Db.GetCollection<AppUser>("Users");
        }
        public async Task<AppUser> GetUserAsync(AppUser user)
        {
            // var filterBuilder =Builders<AppUser>.Filter;
            // var filter = filterBuilder.Eq("Email",user.Email) & filterBuilder.Eq("Password",user.Password);
            // // var filter=Builders<AppUser>.Filter.Eq("Email",user.Email);
            
            // try{
            //     return await _usersCollection.Find(filter).FirstOrDefaultAsync();

            // }
            // catch(Exception ex){
            //     //todo: log exception.
            //     throw ex;
            // }
            try{
                return await _usersCollection.AsQueryable<AppUser>().Where(u=>u.Email==user.Email && u.Password==user.Password).FirstOrDefaultAsync();
            }
            catch(Exception ex){
                //todo: log exception.
                throw ex;
            }
            
        }

        public async Task CreateUserAsync(AppUser user) => await  _usersCollection.InsertOneAsync(user); //_context.Users.InsertOneAsync(user);
    }
}