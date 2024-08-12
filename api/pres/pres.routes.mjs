import express from 'express'
import { addPres, getByTitle, updatePresByTitle, deletePres } from './pres.controller.mjs'
const router = express.Router()

router.post('/', addPres)
router.get('/', getByTitle)
router.put('/', updatePresByTitle)
router.delete('/', deletePres)

export const presRoutes = router