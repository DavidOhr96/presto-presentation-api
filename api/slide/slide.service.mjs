import { dbService } from '../../services/db.service.mjs'
import { presService } from '../pres/pres.service.mjs'

export const slideService = {
    add,
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