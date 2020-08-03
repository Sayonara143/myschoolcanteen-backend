import express from 'express'
const router = express.Router();


router.get('/', async (req,res) => {
    try {
        let director = req.director
        res.json({name: director.name, surname: director.surname});
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "sorry, the server crashed"});
    }
});

export default router