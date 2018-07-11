import { MongoClient, Collection } from 'mongodb';

const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017';
const name = process.env.DB_NAME || 'test';

export const createConnection = async (
  fn: (collection: Collection) => void,
) => {
  try {
    const client = await MongoClient.connect(
      uri,
      { useNewUrlParser: true },
    );
    const db = client.db(name);
    const collection = db.collection('items');
    console.log(`${uri}/${name} connected`);
    fn(collection);
    client.close();
  } catch (e) {
    console.log(e);
  }
};
