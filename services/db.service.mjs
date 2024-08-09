import mongoDB from 'mongodb'
const { MongoClient } = mongoDB


export const dbService = {
    getCollection
}
var dbConn = null
async function getCollection(collectionName) {
    try {
        const db = await connect()
        const collection = db.collection(collectionName)
        return collection
    }
    catch (err) {
        throw err
    }
}

async function connect() {
    if (dbConn) return dbConn
    try {
        const client = await MongoClient.connect(confiig.dbURL, { uswNewUrlParser: true, useUnifiedTopology: true })
        const db=client.db(config.dbName)
        dbConn=db
        return db
    }
    catch(err){
        throw err
    }
}