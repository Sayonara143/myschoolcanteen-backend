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

    const { adminClass, date, title, summa, one, two, three, four, five, six} = data

    try {
        const newCalendarData = {  
            title: title,
            one: one,
            two: two,
            three: three,
            four: four,
            five: five, 
            six: six,     
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