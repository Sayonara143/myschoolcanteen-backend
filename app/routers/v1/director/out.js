import express from 'express'
const router = express.Router();

import * as accessTokenAPI from '../../../models/accessTokenDirector'
import * as refreshTokenAPI from '../../../models/refreshTokenDirector'


router.get('/', async (req,res) => {
    try {
        await accessTokenAPI.deleteByDirectorLogin(req.director.login)
        await refreshTokenAPI.deleteByDirectorLogin(req.director.login)
        res.sendStatus(200)
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "sorry, the server crashed"});
    }
});


export default router