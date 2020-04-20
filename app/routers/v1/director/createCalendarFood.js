import express from 'express'
const router = express.Router();
import * as CalendarFoodModelAPI from '../../../models/calendarFood'




const checkInput = (input) => {
    if ( input.date === null ||  input.summa === null || input.adminClass === null) {
        return false;

    }
    else return true;
}


router.post('/', async (req, res)=>{
    const data = req.body
    if(!checkInput(data)){
        res.sendStatus(400)
        return 
    } 


    const { adminClass, date , summa, title, second, first, third, fourth} = data

    try {
        const newCalendarData = {  
            title: title,
            first: first,
            second: second,
            third: third,
            fourth: fourth,         
            adminClass: adminClass,
            summa: summa,
            date: date,  
        }
        await CalendarFoodModelAPI.createCalendarFood(newCalendarData)
        res.sendStatus(200)
          
    }
    catch (err) {
        console.error(err)
        res.sendStatus(500)

    }
})

export default router 