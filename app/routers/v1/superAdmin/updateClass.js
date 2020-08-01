import express from 'express'
const router = express.Router();
import * as ClassAPI from '../../../models/classModel'


const checkInput = (input) => {
    if ( input.adminLogin === null || input.numberClass === null) {
        return false
    }
    else return true
}

router.post('/', async (req, res)=>{
    const data = req.body
    if(!checkInput(data)){
        res.sendStatus(400)
        return 
    } 

    const { adminLogin, numberClass } = data

    try {
        await ClassAPI.UpdateClassAdminLogin(numberClass, adminLogin)
        res.sendStatus(200)  
    }
    catch (err) {
        console.error(err)
        res.sendStatus(500)

    }
})

export default router 