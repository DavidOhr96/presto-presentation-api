import express from 'express'
import { addPres, getByTitle, updatePresByTitle, deletePres, queryAll } from './pres.controller.mjs'
const router = express.Router()

router.post('/', addPres)
router.get('/', getByTitle)
router.put('/', updatePresByTitle)
router.delete('/', deletePres)
router.get('/all', queryAll)

export const presRoutes = router