using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ShareList.Core
{
    public class Item{
        [BsonId] 
        [BsonRepresentation(BsonType.ObjectId)] 
        public string Id { get; set; }
        public string Description { get; set; }
    }
}
