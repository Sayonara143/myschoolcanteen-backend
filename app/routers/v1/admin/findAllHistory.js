import express from 'express'
import * as HistoryModelAPI from '../../../models/historyModel'
const router = express.Router();


router.get('/', async (req,res) => {
    console.log('ok');
    const admin = req.admin;
    const history = await HistoryModelAPI.findAllHistory(admin.login)
    res.json(history);
});


export default router