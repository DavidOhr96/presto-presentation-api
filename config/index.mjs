import * as dotenv from 'dotenv'

dotenv.config()


export var config = {
    dbURL: process.env.DB_URI,
    dbName: process.env.DB_NAME,
    isGuestMode: true
}