import express from 'express'
import * as UsersModelAPI from '../../../models/usersModel'
import * as AccessTokenAPI from '../../../models/accessTokenUsers'
const router = express.Router();



router.get('/', async (req,res) => {
    const user = req.user;
    res.json(user.balance);
});


export default router