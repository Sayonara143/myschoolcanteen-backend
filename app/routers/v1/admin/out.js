import express from 'express'
const router = express.Router();

import * as accessTokenAPI from '../../../models/accessTokenAdmin'
import * as refreshTokenAPI from '../../../models/refreshTokenAdmin'


router.get('/', async (req,res) => {
    try {
        await accessTokenAPI.deleteByAdminLogin(req.admin.login)
        await refreshTokenAPI.deleteByAdminLogin(req.admin.login)
        res.sendStatus(200)
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "sorry, the server crashed"});
    }
});


export default router