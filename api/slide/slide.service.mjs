import { ObjectId } from 'mongodb'
import { dbService } from '../../services/db.service.mjs'
import { presService } from '../pres/pres.service.mjs'

export const slideService = {
    add,
    get,
    update,
    remove
}

async function add(newSlideData) {
    try {
        const slideDataToAdd = { ...newSlideData }
        const collection = await dbService.getCollection('slide')
        const result = await collection.insertOne(slideDataToAdd)
        await presService.updateNewSlide({ _id: result.insertedId, presTitle: newSlideData.presTitle })

        return { ...slideDataToAdd, _id: result.insertedId }
    }
    catch (err) {
        throw err
    }
}

async function get(slideId) {
    try {
        const collection = await dbService.getCollection('slide')
        const slide = collection.findOne({ _id: new ObjectId(slideId) })
        return slide
    }
    catch (err) {
        throw err
    }
}

async function update(slideId, slideUpdates) {
    try {
        const collection = await dbService.getCollection('slide')
        const result = await collection.updateOne({ _id: new ObjectId(slideId) }, { $set: slideUpdates })
        if (result.matchedCount === 0) {
            return null // No document found to update
        }
        return { _id: slideId, ...slideUpdates }
    }
    catch (err) {
        throw err
    }
}
async function remove(slideId) {
    try {
        const collection = await dbService.getCollection('slide')
        const slide = await collection.findOne({ _id: new ObjectId(slideId) })
        const result = await collection.deleteOne({ _id: new ObjectId(id) })
        if (result.deletedCount === 0) {
            throw new Error('Slide not found')
        }
        await presService.removeSlideFromPres(slide.presTitle, slideId)
        return slide
    }
    catch (err) {
        throw err
    }

}