import express from 'express'
const router = express.Router();


import viewsBalance from './balance'
import viewsHistory from './history'
import viewsMyEat from './myEat'
import viewsSettings from './settings'

router.use('/balance', viewsBalance);
router.use('/history', viewsHistory);
router.use('/myEat', viewsMyEat);
router.use('/settings', viewsSettings);

export default router 