import express from 'express'
import * as UsersModelAPI from '../../../models/usersModel'
import * as AccessTokenAPI from '../../../models/accessTokenAdmin'
import * as AdminModelAPI from '../../../models/adminModel'
const router = express.Router();


router.get('/', async (req,res) => {
    const admin = req.admin;
    const users = await UsersModelAPI.findAllUsers(admin.login)
    res.json(users);
});


export default router