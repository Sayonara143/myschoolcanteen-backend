import express from 'express'
const router = express.Router();


import getAllCalendarFoodClass from './getAllCalendarFoodClass'
import UpdateUsersBalance  from './updateUsersBalance';
//import getYourBalance from './getYourBalance'; look in sync 
import sync from './sync'
import getSettings from './getSettings'
import change from './changeUsersData/router'
import notice from './noticeDayWhenEat'

import out from './out'

router.use('/notice', notice);
router.use('/change', change);
router.use('/sync', sync);
router.use('/settings', getSettings);
router.use('/updateUsersBalance', UpdateUsersBalance);
//router.use('/getYourBalance', getYourBalance); look in sync
router.use('/getAllCalendarFoodClass', getAllCalendarFoodClass);

router.use('/out', out)

export default router 