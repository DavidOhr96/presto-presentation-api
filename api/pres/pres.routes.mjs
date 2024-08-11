import express from 'express'
import { addPres, getByTitle } from './pres.controller.mjs'
const router = express.Router()

router.post('/', addPres)
router.get('/',getByTitle)

export const presRoutes = router