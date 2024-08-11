import { presService } from "./pres.service.mjs"

export async function getByTitle(req, res) {
    try {
        const presTitle = req.params.title
        console.log('presTitle server controller', presTitle)
        const pres = await presService.get(presTitle)
        console.log('pres server controller', pres)
        res.send(pres)
    }
    catch (err) {
        res.status(400).send({ err: ' Failed to get pres' })
    }
}

export async function addPres(req, res) {
    try {
        const newPres = req.body
        const addedPres = await presService.add(newPres)
        res.json(addedPres)
    }
    catch (err) {
        res.status(400).send({ err: 'Failed to add presentation' })
    }
}