import express from 'express'
import {addSlide,updateSlide} from './slide.controller.mjs'
const router = express.Router()

router.post('/', addSlide)
router.put('/',updateSlide)


export const slideRoutes = router