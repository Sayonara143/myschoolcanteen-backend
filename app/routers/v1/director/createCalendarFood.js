import express from 'express'
const router = express.Router();
import * as CalendarFoodModelAPI from '../../../models/calendarFood'
import * as ClassAPI from '../../../models/classModel'


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

    const { numberClass, date, title, summa, one, two, three, four, five, six} = data

    try {
        let dataClass = await ClassAPI.findClassByClass(numberClass)
        if(dataClass){
            console.log(dataClass[0].adminLogin)
            const newCalendarData = {  
                title: title,
                one: one,
                two: two,
                three: three,
                four: four,
                five: five, 
                six: six,     
                adminClass: dataClass[0].adminLogin,
                summa: summa,
                date: date,  
            }
            await CalendarFoodModelAPI.createCalendarFood(newCalendarData)
            res.sendStatus(200)
        }else{
            res.sendStatus(400)
        }
        
          
    }
    catch (err) {
        console.error(err)
        res.sendStatus(500)

    }
})

export default router 