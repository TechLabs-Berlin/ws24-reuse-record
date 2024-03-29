import pymongo

def get_window_data():
    client = pymongo.MongoClient("mongodb://username:password@hostname:port/database")
    db = client['your_database_name']
    collection = db['your_collection_name']
    window_configs = collection.find({})
    return window_configs
