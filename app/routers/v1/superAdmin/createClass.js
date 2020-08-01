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
        res.status(400).json({error: "data is undefinded"})
        return 
    } 

    const { adminLogin, numberClass } = data

    try {
        let schoolClass = await ClassAPI.findClassByClass(numberClass)
        if(!schoolClass) {
            const newClassData = {  
                class: numberClass,   
                adminLogin: adminLogin,
            }
            await ClassAPI.createClass(newClassData)
            res.sendStatus(200)
        } else{
            res.status(409).json({ schoolClassFound: true })
        }
        
    }
    catch (err) {
        console.error(err)
        res.status(500).json({error: "sorry, the server crashed"});

    }
})

export default router 