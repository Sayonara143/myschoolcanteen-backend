import express from 'express'
import * as CalendarFoodModelAPI from '../../../models/calendarFood'
const router = express.Router();

let removedOne,
    removedTwo,
    removedThree,
    removedFour;
let calendarResponse;


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
    removedOne = calendar.splice(0, 6);
    removedTwo = calendar.splice(6, 13);
    removedThree = calendar.splice(13, 20);
    removedFour = calendar.splice(20, 27);
    calendarResponse = {
        removedOne,
        removedTwo,
        removedThree,
        removedFour
    }
    res.json(calendarResponse);
});


export default router