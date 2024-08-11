import express from 'express'
import { addPres } from './pres.controller.mjs'
const router = express.Router()

router.post('/', addPres)

export const presRoutes = router