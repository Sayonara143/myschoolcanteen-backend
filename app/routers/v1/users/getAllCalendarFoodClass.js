import express from 'express'
import * as CalendarFoodModelAPI from '../../../models/calendarFood'
const router = express.Router();

let removedOne,
    removedTwo,
    removedThree,
    removedFour;
let calendarResponse;

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
async function completion (long, name){
    let count = long - name.length
    if(count > 3){ 
        count = long - count

    }
    for (let i = name.length; count < long; i++) {
        name[count] = {summа: 'Пусто'}  
        count++
    }
}
async function already () {
    await completion(6, removedOne)
    await completion(6, removedTwo)
    await completion(6, removedThree)
    await completion(6, removedFour)
}

router.post('/', async (req,res) => {
    const calendar = [];
    const user = req.user;
    const dateOne = req.body.dateOne;
    const calendarFood = await CalendarFoodModelAPI.findAllCalendarFoodClass(user.admin);

    let length = calendarFood.length;
    let date;

    for(let i = 0; i < (length); i++) {
        date = new Date(calendarFood[i].date)
        if( dateOne == String(months[date.getMonth()])){
            calendar.push(calendarFood[i])
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

    await already()
    
    calendarResponse = {
        removedOne,
        removedTwo,
        removedThree,
        removedFour
    }
    res.json(calendarResponse);
});


export default router