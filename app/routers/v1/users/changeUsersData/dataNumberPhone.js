import express from 'express'
import * as UsersModelAPI from '../../../../models/usersModel'
import * as AccessTokenAPI from '../../../../models/accessTokenUsers'
const router = express.Router();


let numberPhone;
router.get('/', async (req,res) => {
    const user = req.user;
    numberPhone = req.body.numberPhone
    await UsersModelAPI.UpdateUsersNumberPhone(user.login, numberPhone);
    res.sendStatus(200);
});


export default router