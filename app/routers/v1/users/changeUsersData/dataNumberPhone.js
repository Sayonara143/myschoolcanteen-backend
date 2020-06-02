import express from 'express'
import * as UsersModelAPI from '../../../../models/usersModel'
import * as AccessTokenAPI from '../../../../models/accessTokenUsers'
const router = express.Router();



router.get('/', async (req,res) => {
    const user = req.user;
    let object = {balance: user.balance, name: user.name, surname: user.surname, path: user.path}
    res.json(object);
});


export default router