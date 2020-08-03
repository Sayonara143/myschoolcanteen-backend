import express from 'express'
const router = express.Router();


router.get('/', async (req,res) => {
    try {
        let user = req.user
        res.json({name: user.name, surname: user.surname});
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "sorry, the server crashed"});
    }
});


export default router