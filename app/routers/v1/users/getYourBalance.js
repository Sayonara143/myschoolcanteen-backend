import express from 'express'
import * as UsersModelAPI from '../../../models/usersModel'
import * as AccessTokenAPI from '../../../models/accessTokenUsers'
const router = express.Router();



router.get('/', async (req,res) => {
    const user = req.user;
    let object = {balance: user.balance, name: user.name, surname: user.surname, path: user.path}
    try {
        res.json(object);
    }
    catch(err) {
        console.log(err)
        res.status(500).json({error: "sorry, the server crashed"});
    }
    
});


export default router