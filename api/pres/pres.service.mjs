import { dbService } from '../../services/db.service.mjs'
export const presService = {
    add
}

async function add(data) {
    try {
        const { title, authors, dateOfPub } = data
        //function to check title uniqe
        const presToAdd = {
            title,
            authors,
            dateOfPub
        }
        const collection = await dbService.getCollection('pres')
        await collection.insertOne(presToAdd)
        return presToAdd
    }
    catch (err) {
        throw err
    }
}