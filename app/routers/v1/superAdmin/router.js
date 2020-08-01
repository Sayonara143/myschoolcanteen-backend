import express from 'express'
const router = express.Router();


import createAdmin from './createAdmin'
import createDirector  from './createDirector'
import sync from './sync'
import createClass from './createClass'
import updateClass from './updateClass'

import deleteUser from './deleteUser'
import deleteAdmin from './deleteAdmin'
import deleteDirector from './deleteDirector'

router.use('/createAdmin', createAdmin);
router.use('/createDirector', createDirector);

router.use('/createClass', createClass);
router.use('/updateClass', updateClass)

router.use('/deleteUser', deleteUser)
router.use('/deleteAdmin', deleteAdmin)
router.use('/deleteDirector', deleteDirector)

router.use('/sync', sync);


export default router 