import express from 'express'
import * as UsersModelAPI from '../../../../models/usersModel'
import * as AccessTokenAPI from '../../../../models/accessTokenUsers'
const router = express.Router();



router.post('/', async (req,res) => {
    const user = req.user;
    let  email = req.body.email;
    await UsersModelAPI.UpdateUsersEmail(user.login, email);
    res.sendStatus(200);
});


export default router