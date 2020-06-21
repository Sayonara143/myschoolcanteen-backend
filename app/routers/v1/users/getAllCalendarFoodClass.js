import express from 'express'
import * as CalendarFoodModelAPI from '../../../models/calendarFood'
const router = express.Router();



router.post('/', async (req,res) => {
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
        arr = calendarFood[i].date.split("T");
        if(dateOne < arr[0] ) {
            if(arr[0] < dateTwo){
                calendar.push(calendarFood[i])
            }
        }

    }
    res.json(calendar);
});


export default router