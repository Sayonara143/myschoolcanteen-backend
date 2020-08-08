import express from 'express'
const router = express.Router();


import getAllUsers from './getAllUsers'
import createUsers from './createUser'
import findAllHistory from './findAllHistory'
import sync from './sync'

import out from './out'

router.use('/getAllUsers', getAllUsers);
router.use('/createUser', createUsers);
router.use('/findAllHistory', findAllHistory);
router.use('/sync', sync);

router.use('/out', out)

export default router 