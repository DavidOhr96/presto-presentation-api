import { dbService } from '../../services/db.service.mjs'
import { presService } from '../pres/pres.service.mjs'

export const slideService = {
    add,
    get,
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
        const slide= collection.findOne({_id:slideId})
        console.log(slide)
        return slide
    }
    catch (err) {
        throw err
    }
}