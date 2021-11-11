const {MongoClient} = require('mongodb');
const {password, database} = require('./config.js');

async function main() {
    const uri = `mongodb+srv://intelistyle:${password}@intelistyle-challenge.ykzfk.mongodb.net/${database}?retryWrites=true&w=majority`;

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
    
        await listDatabases(client);
     
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};