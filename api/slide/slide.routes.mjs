import express from 'express'
import {addSlide} from './slide.controller.mjs'
const router = express.Router()

router.post('/', addSlide)


export const slideRoutes = router