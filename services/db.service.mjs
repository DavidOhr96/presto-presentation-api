import mongoDB from 'mongodb'
const { MongoClient } = mongoDB

import{config}from '../config/index.mjs'

export const dbService = {
    getCollection
}
var dbConn = null
async function getCollection(collectionName) {
    try {
        console.log('1')
        const db = await connect()
        console.log('2')
        const collection = db.collection(collectionName)
        console.log('3')
        return collection
    }
    catch (err) {
        throw err
    }
}

async function connect() {
    if (dbConn) return dbConn
    try {
        console.log(config)
        const client = await MongoClient.connect(config.dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('1.2')
        const db=client.db(config.dbName)
        console.log('1.3')
        dbConn=db
        return db
    }
    catch(err){
        console.error('MongoDB connection error:', err)
        throw err
    }
}