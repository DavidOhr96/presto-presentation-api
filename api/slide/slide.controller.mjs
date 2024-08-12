import { slideService } from "./slide.service.mjs"

export async function addSlide(req, res) {
    try {
        const newSlide = req.body
        const addedSlide = await slideService.add(newSlide)
        res.json(addedSlide)
    }
    catch (err) {
        res.status(400).send({ err: 'Failed to add slide' })
    }
}

export async function updateSlide(req, res) {
    try {
        const slide = req.body
        const updatedSlide = await slideService.update(slide)
        res.json(updatedSlide)
    }
    catch (err) {
        res.status(400).send({ err: 'Failed to update slide' })
    }
}