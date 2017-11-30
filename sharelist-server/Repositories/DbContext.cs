using Microsoft.Extensions.Options;
using ShareList.Core;
using MongoDB.Driver;
using ShareList.Core.Repositories;

namespace ShareList.Repository{
    public class DbContext:IDbContext{
        public IMongoDatabase Db { get; }
        public DbContext(IOptions<Settings> settings){
            var client=new MongoClient(settings.Value.ConnectionString);
            if(client !=null){
                Db=client.GetDatabase(settings.Value.Database);
            }
        }
    }
}