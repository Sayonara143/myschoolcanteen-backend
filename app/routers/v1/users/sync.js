import express from 'express'
const router = express.Router();


router.get('/', async (req,res) => {
    try {
        res.status(200).json({status: 'ok'});
    } catch (error) {
        res.status(500).json({error: "sorry, the server crashed"});
    }
});


export default router