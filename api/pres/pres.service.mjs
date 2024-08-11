import { dbService } from '../../services/db.service.mjs'
export const presService = {
    add
}

async function add(newPresData) {
    try {
        const { title, authors, dateOfPub } = newPresData
        //function to check title uniqe
        const presToAdd = {
            title,
            authors,
            dateOfPub
        }
        const collection = await dbService.getCollection('pres')
        console.log(collection)
        await collection.insertOne(presToAdd)
        return presToAdd
    }
    catch (err) {
        throw err
    }
}