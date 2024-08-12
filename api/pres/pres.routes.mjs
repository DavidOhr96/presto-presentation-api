import express from 'express'
import { addPres, getByTitle,updatePresByTitle } from './pres.controller.mjs'
const router = express.Router()

router.post('/', addPres)
router.get('/',getByTitle)
router.put('/',updatePresByTitle)

export const presRoutes = router