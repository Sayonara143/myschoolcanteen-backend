import express from 'express'
import * as AdminAPI from '../../../models/adminModel'
const router = express.Router();



router.delete('/:login', async (req,res) => {
    try {
        let login = req.params.login
        if (login){
            let process = await AdminAPI.deleteAdminByLogin(login)
            if (process.n == 1){
                res.sendStatus(200)
            } else{
                res.status(400).json({error: "Bad request, failed to Delete"})
            }
        } else{
            res.status(400).json({error: "login is undefinded"})
        }

    } catch (error) {
        res.status(500).json({error: "sorry, the server crashed"})
    }
});

export default router