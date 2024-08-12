import { ObjectId } from 'mongodb'
import { dbService } from '../../services/db.service.mjs'
export const presService = {
    add,
    get,
    update,
    updateNewSlide,
    removeSlideFromPres,
    remove
}

async function add(newPresData) {
    try {
        const { title, authors, dateOfPub, slides } = newPresData
        const collection = await dbService.getCollection('pres')
        const existingPres = await collection.findOne({ title })
        if (existingPres) {
            throw new Error('A presentation with this title already exists. Please choose a diffrent name for your presentation.')
        }
        const presToAdd = {
            title,
            authors,
            dateOfPub,
            slides
        }
        await collection.insertOne(presToAdd)
        return presToAdd
    }
    catch (err) {
        throw err
    }
}

async function get(presTitle) {
    try {
        const collection = await dbService.getCollection('pres')
        const pres = collection.findOne({ title:presTitle })
        return pres
    }
    catch (err) {
        throw err
    }
}

async function updateNewSlide(newSlide){
    try{
        const newSlideId=newSlide._id.toString()
        const presToUpdateTitle=newSlide.presTitle

        const collection = await dbService.getCollection('pres')
        const presToUpdate=await collection.updateOne({title:presToUpdateTitle}, {$push:{slides:newSlideId}})
        return presToUpdate
    }
    catch (err){
        throw err
    }
}

async function update(pres){
    try{
const presTitle=pres.title
const newAuthors=pres.authors
const collection=await dbService.getCollection('pres')
await collection.updateOne({title:presTitle},{$set:{authors:newAuthors}})
return pres
    }
    catch(err){
        throw err
    }
}

async function removeSlideFromPres(presTitle,slideId) {
    try{
        const collection=await dbService.getCollection('pres')
        const result=await collection.updateOne({title:presTitle},{$pull:{slides:slideId}})
        console.log(result)
            }
            catch(err){
                throw err
            }
}

async function remove(presToDelete){
try{
    const collection=await dbService.getCollection('pres')
    await collection.deleteOne({title:presToDelete.title})
    return
}
catch(err){
    throw err
}
}