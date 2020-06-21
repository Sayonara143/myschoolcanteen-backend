import express from 'express'
import * as CalendarFoodModelAPI from '../../../models/calendarFood'
const router = express.Router();



router.post('/', async (req,res) => {
    let arr;
    const calendar = [];
    const user = req.user;
    const dateOne = req.body.dateOne;
    const dateTwo = req.body.dateTwo;
    console.log(dateOne);
    console.log(dateTwo);
    const calendarFood = await CalendarFoodModelAPI.findAllCalendarFoodClass(user.admin);
    let length = calendarFood.length;
    console.log(calendarFood);
    for(let i = 0; i < (length); i++) {
        arr = String(calendarFood[i].date);
        arr = arr.split("T");
        console.log(arr);
        if(dateOne < arr ) {
            if(arr < dateTwo){
                calendar.push(calendarFood[i])
            }
        }

    }
    res.json(calendar);
});


export default router