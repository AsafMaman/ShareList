using System;
using System.Collections.Generic;
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
    public class ListRepository:IListRepository{
        
        private readonly IMongoCollection<List> _listCollection;
        public ListRepository(IOptions<Settings> settings,IDbContext DbContext)
        {
            _listCollection=DbContext.Db.GetCollection<List>("Lists");
        }
        public async Task<IEnumerable<List>> GetListsAsync(string userId)
        {
            try{
                return await _listCollection.AsQueryable<List>().Where(l=>l.UserId==userId).ToListAsync();
            }
            catch(Exception ex){
                //todo: log exception.
                throw ex;
            }
            
        }

        public async Task<string> AddListAsync(List list){
            // var document =new BsonDocument{
            //     {"name",BsonValue.Create(list.Name)}
            // };
            await _listCollection.InsertOneAsync(list);
            return "ok";
        }

         public async Task<string> DeleteListAsync(string listId){
            // var document =new BsonDocument{
            //     {"name",BsonValue.Create(list.Name)}
            // };
            await _listCollection.DeleteOneAsync(l=>l.Id==listId);
            return "ok";
        }

    }
}