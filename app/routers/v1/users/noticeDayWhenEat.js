import express from 'express'
import * as NoticeApi from '../../../models/noticeDayModel'
const router = express.Router();



router.post('/', async (req,res) => {
    const user = req.user;
    const data = req.body;
    if(data.flag === null  || data.date === null){
        res.json("empty data")
    }
    try{
        await NoticeApi.createNotice(user.login, user.admin, data.flag)
        res.sendStatus(200);
    }
    catch(error){
        res.sendStatus(500);
        console.log(error.message);
    }
    res.json(object);
});


export default router