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
 
        if( new Date(dateOne) < new Date(calendarFood[i].date) ) {
            if(new Date(calendarFood[i].date) <  new Date(dateTwo)){
                calendar.push(calendarFood[i])
            }
        }

    }
    calendar.sort(function(a,b){
        var c = new Date(a.date);
        var d = new Date(b.date);
        return c-d;
    })
    res.json(calendar);
});


export default router