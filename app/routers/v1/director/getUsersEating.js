import express from 'express'
import * as UsersModelAPI from '../../../models/usersModel'
import * as NoticeApi from '../../../models/noticeDayModel'
const router = express.Router();



router.post('/', async (req,res) => {
    const data = req.body;
    try{
        let notice =  await NoticeApi.findAllNoticeAdmin(data.adminLogin)
        res.json(notice);
    }
    catch(error){
        console.log(error.message);
        res.sendStatus(500);
    }
});


export default router