using MongoDB.Driver;

namespace ShareList.Core.Repositories
{
    public interface IDbContext
    {
        IMongoDatabase Db { get; }
    }
}