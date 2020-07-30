import express from 'express'
import * as UsersModelAPI from '../../../../models/usersModel'
import * as AccessTokenAPI from '../../../../models/accessTokenUsers'
const router = express.Router();


let numberPhone;
router.get('/', async (req,res) => {
    const user = req.user;
    numberPhone = req.body.numberPhone
    if (user === null || numberPhone === null){
        res.status(400).json({error: "data of null"});
    }
    try {
        await UsersModelAPI.UpdateUsersNumberPhone(user.login, numberPhone);
        res.sendStatus(200);
    } catch (error) {
        res.status(500).json({error: "sorry, the server crashed"});
    }
});


export default router