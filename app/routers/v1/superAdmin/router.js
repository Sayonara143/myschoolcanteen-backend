import express from 'express'
const router = express.Router();


import createAdmin from './createAdmin'
import createDirector  from './createDirector'
import sync from './sync'
import createClass from './createClass'
import updateClass from './updateClass'
import deleteUser from './deleteUser'

router.use('/createAdmin', createAdmin);
router.use('/createDirector', createDirector);

router.use('/createClass', createClass);
router.use('/updateClass', updateClass)

router.use('/deleteUser',deleteUser)

router.use('/sync', sync);


export default router 