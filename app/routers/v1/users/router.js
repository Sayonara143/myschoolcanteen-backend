import express from 'express'
const router = express.Router();


import getAllCalendarFoodClass from './getAllCalendarFoodClass'
import UpdateUsersBalance  from './updateUsersBalance';
import getYourBalance from './getYourBalance';
import sync from './sync'
import settings from './settings'

router.use('/sync', sync);
router.use('/settings', settings);
router.use('/updateUsersBalance', UpdateUsersBalance);
router.use('/getYourBalance', getYourBalance);
router.use('/getAllCalendarFoodClass', getAllCalendarFoodClass);

export default router 