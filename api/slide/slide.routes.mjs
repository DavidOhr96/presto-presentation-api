import express from 'express'
import { addSlide, updateSlide, deleteSlide } from './slide.controller.mjs'
const router = express.Router()

router.post('/', addSlide)
router.put('/:id', updateSlide)
router.delete('/:id', deleteSlide)


export const slideRoutes = router