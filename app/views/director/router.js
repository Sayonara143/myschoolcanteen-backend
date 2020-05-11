import express from 'express'
const router = express.Router();

import viewsAuthorization from './authorization'
import viewsStudent from './student'
import viewsMenu from './menu'

router.use('/', viewsAuthorization);
router.use('/menu', viewsMenu);
router.use('/student', viewsStudent);

export default router 