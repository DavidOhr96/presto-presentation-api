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

