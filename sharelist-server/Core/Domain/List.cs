using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ShareList.Core
{
    public class List{
        [BsonId] 
        [BsonRepresentation(BsonType.ObjectId)] 
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string UserId { get; set; }
        public string  Items { get; set; }
    }
}
