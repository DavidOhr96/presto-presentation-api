import express from 'express'
import { addPres, getByTitle, updatePresByTitle, deletePres, queryAll } from './pres.controller.mjs'
const router = express.Router()

router.post('/', addPres);
router.get('/:title', getByTitle);
router.put('/:title', updatePresByTitle);
router.delete('/:title', deletePres);
router.get('/', queryAll);

export const presRoutes = router