import { presService } from "./pres.service.mjs"

export async function getByTitle(req, res) {
    try {
        const presTitle = req.params.title
        const pres = await presService.get(presTitle)
        if (!pres) {
            return res.status(404).send({ error: 'Presentation not found' })
        }
        res.send(pres)
    }
    catch (err) {
        res.status(500).send({ err: ' Failed to get presentation' })
    }
}

export async function addPres(req, res) {
    try {
        const newPres = req.body
        const addedPres = await presService.add(newPres)
        res.status(201).json(addedPres)
    }
    catch (err) {
        res.status(400).send({ err: 'Failed to add presentation' })
    }
}

export async function updatePresByTitle(req, res) {
    try {
        const presTitle = req.params.title
        const presToUpdate = req.body
        const updatedPres = await presService.update(presTitle, presToUpdate)
        res.json(updatedPres)
    }
    catch (err) {
        res.status(400).send({ err: 'Failed to update presentation' })
    }
}


export async function deletePres(req, res) {
    try {
        const presTitle=req.params.title
        const result = await presService.remove(presTitle)
        if (result.deletedCount === 0) {
            return res.status(404).send({ error: 'Presentation not found' })
        }
        res.status(204).send()
    }
    catch (err) {
        res.status(400).send({ err: 'Failed to delete presentation' })
    }
}

export async function queryAll(req, res) {
    try {
        const allPress = await presService.getAll()
        res.json(allPress)
    }
    catch (err) {
        res.status(500).send({ err: 'Failed to query all presentations' })
    }
}
