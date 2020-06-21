import express from 'express'
const router = express.Router();


import createCalendarFood from './createCalendarFood'
import sync from './sync'
import getUsersEating from './getUsersEating'

router.use('/getUsersEating', getUsersEating)
router.use('/createCalendarFood', createCalendarFood);
router.use('/sync', sync);

export default router 