const { MongoClient } = require('mongodb');
const { password, database } = require('./config/config');

async function findProductByTypeandColour({ type, colour }) {
    const uri = `mongodb+srv://intelistyle:${password}@intelistyle-challenge.ykzfk.mongodb.net/${database}?retryWrites=true&w=majority`;

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        const database = client.db("Intelistyle");
        const collection = database.collection("Products");
        const query = { "product_title": { '$regex': `${type} - ${colour}`, '$options': 'i' } };
        const product = await collection.find(query).toArray();
        return product;
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

module.exports = {
    findProductByTypeandColour
};