import express from 'express'
const router = express.Router();

import * as ClassAPI from '../../../models/classModel'


router.get('/', async(req, res) => {
    try {
        const clas = await ClassAPI.findAllClass()
        res.status(200).json(clas);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "sorry, the server crashed" });
    }
});


export default router