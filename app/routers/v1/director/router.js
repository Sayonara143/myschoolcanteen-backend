import express from 'express'
const router = express.Router();


import createCalendarFood from './createCalendarFood'
import sync from './sync'
import getUsersEating from './getUsersEating'
import out from './out'

router.use('/getUsersEating', getUsersEating)
router.use('/createCalendarFood', createCalendarFood);
router.use('/sync', sync);

router.use('/out', out)

export default router 