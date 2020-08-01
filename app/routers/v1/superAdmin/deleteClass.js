import express from 'express'
import * as ClassAPI from '../../../models/classModel'
const router = express.Router();



router.delete('/:class', async (req,res) => {
    try {
        let numberClass = req.params.class
        if (numberClass){
            let process = await ClassAPI.deleteClassByClass(numberClass)
            if (process.n == 1){
                res.sendStatus(200)
            } else{
                res.status(400).json({error: "Bad request, failed to Delete"})
            }
        } else{
            res.status(400).json({error: "Class is undefinded"})
        }

    } catch (error) {
        console.error(error)
        res.status(500).json({error: "sorry, the server crashed"})
    }
});

export default router