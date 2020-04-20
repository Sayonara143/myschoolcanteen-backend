import express from 'express'
import * as UsersModelAPI from '../../../models/usersModel'
import * as HistoryModelAPI from '../../../models/historyModel'
const router = express.Router();

const checkInput = (input) => {
    if (input.balance === null ) {
        return false;
    }
    else return true;
}

router.post('/', async (req,res) => {
    const data = req.body;
    if(!checkInput(data)){
        res.sendstatus(400)
        return 
    } 
    const user = req.user;
    const balance = Number(req.body.balance) + Number(user.balance);
    const newHistoryData = {
        login: user.login, 
        balance: Number(req.body.balance),
        adminLogin: user.admin
    }
    await UsersModelAPI.UpdateUsersBalance(user.login,balance);
    await HistoryModelAPI.createHistory(newHistoryData)
    
    
    res.sendStatus(200);
});


export default router