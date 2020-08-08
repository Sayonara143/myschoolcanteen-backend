import express from 'express'
const router = express.Router();

import * as accessTokenAPI from '../../../models/accessTokenUsers'
import * as refreshTokenAPI from '../../../models/refreshTokenUsers'



router.get('/', async (req,res) => {
    try {
        await accessTokenAPI.deleteByUserLogin(req.user.login)
        await refreshTokenAPI.deleteByUserLogin(req.user.login)
        res.sendStatus(200)
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "sorry, the server crashed"});
    }
});


export default router