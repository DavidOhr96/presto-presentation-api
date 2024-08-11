import { dbService } from '../../services/db.service.mjs'

export const slideService = {
    add,
}

async function add(newSlideData){
    try{
        const slideDataToAdd={...newSlideData}
        const collection = await dbService.getCollection('slide')
        console.log(slideDataToAdd)
        await collection.insertOne(slideDataToAdd)
        console.log('hello?')
        return slideDataToAdd
    }
    catch(err){
        throw err
    }
}