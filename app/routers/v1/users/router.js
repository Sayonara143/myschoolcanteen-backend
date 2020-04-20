import express from 'express'
const router = express.Router();


import getAllCalendarFoodClass from './getAllCalendarFoodClass'
import UpdateUsersBalance  from './updateUsersBalance';
import getYourBalance from './getYourBalance';
import sync from './sync'

router.use('/sync', sync);
router.use('/updateUsersBalance', UpdateUsersBalance);
router.use('/getYourBalance', getYourBalance);
router.use('/getAllCalendarFoodClass', getAllCalendarFoodClass);

export default router 