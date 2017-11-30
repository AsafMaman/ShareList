using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ShareList.Core
{
    public class AppUser{
        [BsonId] 
        [BsonRepresentation(BsonType.ObjectId)] 
        public string Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string  Email { get; set; }
    }
}
