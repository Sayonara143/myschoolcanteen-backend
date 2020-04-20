import express from 'express'
const router = express.Router();


router.get('/', async (req,res) => {
    res.json('ok');
});


export default router