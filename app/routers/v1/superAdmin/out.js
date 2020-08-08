import express from 'express'
const router = express.Router();

import * as accessTokenAPI from '../../../models/accessTokenSuperAdmin'
import * as refreshTokenAPI from '../../../models/refreshTokenSuperAdmin'


router.get('/', async (req,res) => {
    try {
        await accessTokenAPI.deleteBySuperAdminLogin(req.superAdmin.login)
        await refreshTokenAPI.deleteBySuperAdminLogin(req.superAdmin.login)
        res.sendStatus(200)
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "sorry, the server crashed"});
    }
});


export default router