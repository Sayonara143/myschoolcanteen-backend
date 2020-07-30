import express from 'express'
import * as NoticeApi from '../../../models/noticeDayModel'
const router = express.Router();



router.post('/', async (req,res) => {
    const user = req.user;
    const data = req.body;
    if(data.flag === null  || data.date === null){
        res.json("empty data")
    }
    else{
        try{
            const newNoticeData = {
                login: user.login, 
                adminLogin: user.admin, 
                flag: data.flag,
                date: data.date
            }
            await NoticeApi.createNotice(newNoticeData)
            res.sendStatus(200);
        }
        catch(error){
            res.sendStatus(500);
            console.log(error.message);
        }
    }
});


export default router