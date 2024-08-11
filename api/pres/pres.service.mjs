import { dbService } from '../../services/db.service.mjs'
export const presService = {
    add
}

async function add(newPresData) {
    try {
        const { title, authors, dateOfPub } = newPresData
        //function to check title uniqe
        const collection = await dbService.getCollection('pres')
        const existingPres = await collection.findOne({ title })
        if (existingPres) {
            throw new Error('A presentation with this title already exists. Please choose a diffrent name for your presentation.')
        }
        const presToAdd = {
            title,
            authors,
            dateOfPub
        }
        await collection.insertOne(presToAdd)
        return presToAdd
    }
    catch (err) {
        throw err
    }
}