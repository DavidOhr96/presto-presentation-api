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
        await collection.insertOne(slideDataToAdd)
        presService.updateNewSlide(slideDataToAdd)
        return slideDataToAdd
    }
    catch (err) {
        throw err
    }
}

async function get(slideId) {
    try {
        const collection = await dbService.getCollection('slide')
        console.log(slideId)
        const slide = collection.findOne({ _id: slideId })
        console.log(slide)
        return slide
    }
    catch (err) {
        throw err
    }
}

async function update(slide) {
    try {
        const id = slide._id
        delete slide._id
        const collection = await dbService.getCollection('slide')
        await collection.updateOne({ _id: new ObjectId(id) }, { $set: slide })
        slide._id = id
        return slide

    }
    catch (err) {
        throw err
    }
}
 async function remove(slide){
    try {
        const id = slide._id
        const collection = await dbService.getCollection('slide')
        await collection.deleteOne({ _id: new ObjectId(id) })
        return slide

    }
    catch (err) {
        throw err
    }

 }