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
        let schoolClass = await ClassAPI.findClassByClass(numberClass)
        if(schoolClass){
            let ok = await ClassAPI.UpdateClassAdminLogin(numberClass, adminLogin)
            if(!(ok.nModified == 0)){
                res.sendStatus(200) 
            }else{
                res.status(400).json({error: "Bad request, failed to update"})
            }
        } else{
            res.status(400).json({error: "schoolClass is undefinded"})
        }
         
    }
    catch (err) {
        console.error(err)
        res.sendStatus(500)

    }
})

export default router 