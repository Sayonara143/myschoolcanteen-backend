import express from 'express'
import * as UsersModelAPI from '../../../../models/usersModel'
//import * as AccessTokenAPI from '../../../models/accessTokenUsers'
const router = express.Router();


const path = "image/usersmall.png"
router.get('/', async (req,res) => {
    const user = req.user;
    await UsersModelAPI.UpdateUsersPath(user.login, path);
    res.sendStatus(200);
});


export default router