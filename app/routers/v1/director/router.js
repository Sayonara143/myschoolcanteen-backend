import express from 'express'
const router = express.Router();


import createCalendarFood from './createCalendarFood'
import sync from './sync'


router.use('/createCalendarFood', createCalendarFood);
router.use('/sync', sync);

export default router 