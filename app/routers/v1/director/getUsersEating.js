import express from 'express'
import * as UsersModelAPI from '../../../models/usersModel'
import * as NoticeApi from '../../../models/noticeDayModel'
import * as ClassAPI from '../../../models/classModel'
const router = express.Router();



router.post('/', async (req,res) => {
    const data = req.body;
    try{
        const dataClass = await ClassAPI.findClassByClass(data.numberClass) 
        console.log(dataClass)
        if (dataClass){
            let notice =  await NoticeApi.findAllNoticeAdmin(dataClass.adminLogin, data.date)
            if(notice.length == 0){
                res.status(520).json({error: "array 0"})
            }else {
                console.log(notice.length)
                res.json(notice);
            }
        } else {
            res.status(400).json({error: "number class is undefinded"})
        }
    }
    catch(error){
        console.log(error.message);
        res.status(500);
    }
});


export default router