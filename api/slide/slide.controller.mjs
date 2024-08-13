import { slideService } from "./slide.service.mjs"

export async function addSlide(req, res) {
    try {
        const newSlide = req.body
        const addedSlide = await slideService.add(newSlide)
        res.status(201).json(addedSlide)
    }
    catch (err) {
        res.status(400).send({ err: 'Failed to add slide' })
    }
}

export async function updateSlide(req, res) {
    try {
        const slideId = req.params.id
        const slideUpdates = req.body
        const updatedSlide = await slideService.update(slideId, slideUpdates)
        if (!updatedSlide) {
            return res.status(404).send({ error: 'Slide not found' })
        }

        res.json(updatedSlide)
    }
    catch (err) {
        res.status(400).send({ err: 'Failed to update slide' })
    }
}

export async function deleteSlide(req, res) {
    try {
        const slideId = req.params.id
        const deletedSlide = await slideService.remove(slideId)
        if (!deletedSlide) {
            return res.status(404).send({ error: 'Slide not found' })
        }

        res.json(deletedSlide)
    }
    catch (err) {
        res.status(400).send({ err: 'Failed to delete slide' })
    }
}