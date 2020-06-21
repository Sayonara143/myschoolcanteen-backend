import express from 'express'
import * as CalendarFoodModelAPI from '../../../models/calendarFood'
const router = express.Router();



router.post('/', async (req,res) => {
    const calendar = [];
    const user = req.user;
    const dateOne = req.body.dateOne;
    const dateTwo = req.body.dateTwo;
    const calendarFood = await CalendarFoodModelAPI.findAllCalendarFoodClass(user.admin);
    let length = calendarFood.length;
    for(let i = 0; i < (length + 1); i++) {
        if(dateOne < calendarFood[i].date ) {
            if(calendarFood[i].date < dateTwo){
                calendar.push(calendarFood[i])
            }
        }

    }
    res.json(calendar);
});


export default router