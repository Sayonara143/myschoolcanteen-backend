import express from 'express'
const router = express.Router();

import viewsDirector from './director';
import viewsUsers from './users'
import viewsAdmin from './admin'

router.use('/users', viewsUsers);
router.use('/admin', viewsAdmin);
router.use('/director', viewsDirector);

export default router