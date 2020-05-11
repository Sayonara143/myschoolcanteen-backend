import express from 'express'
const router = express.Router();


import viewsStudent from './student'
import viewsAddUser from './addUser'
import viewsChart from './chart'
import viewsHistory from './history'

router.use('/student', viewsStudent);
router.use('/addUser', viewsAddUser);
router.use('/chart', viewsChart);
router.use('/history', viewsHistory);

export default router 