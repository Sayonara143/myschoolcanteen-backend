import express from 'express'
const router = express.Router();


router.get('/', async (req,res) => {
    try {
        let admin = req.admin
        res.json({name: admin.name, surname: admin.surname});
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "sorry, the server crashed"});
    }
});


export default router