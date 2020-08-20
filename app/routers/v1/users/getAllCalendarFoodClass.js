import express from 'express'
import * as CalendarFoodModelAPI from '../../../models/calendarFood'
const router = express.Router();
let cal = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
let cl = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
let removedOne,
    removedTwo,
    removedThree,
    removedFour,
    removedFive;
let calendarResponse;

let number;
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

function sorting(calendar) {
    for (let i = 0; i < cl.length; i++) {
        if (cl[i] === '1') {
            cl[i] = { summa: 'пусто' }
        }
        if (calendar[i] === '1') {
            calendar[i] = { summa: 'пусто' }
        } else {
            number = calendar[i].date.getDate()

            cl[number - 1] = calendar[i]
        }

    }

}

router.post('/', async(req, res) => {
    let calendar = [];
    const user = req.user;
    const dateOne = req.body.dateOne;
    let calendarFood = await CalendarFoodModelAPI.findAllCalendarFoodClassNoInfa(user.admin, user.ticket);

    let length = calendarFood.length;
    let date;

    for (let i = 0; i < (length); i++) {
        date = new Date(calendarFood[i].date)
        if (dateOne == String(months[date.getMonth()])) {
            calendar.push(calendarFood[i])
        }
    }

    calendar.sort(function(a, b) {
        var c = new Date(a.date);
        var d = new Date(b.date);
        return c - d;
    })
    cal = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
    cl = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
    for (let i = 0; i < calendar.length; i++) {

        cal[i] = calendar[i]
    }
    sorting(cal)
        //await already()
    removedOne = cl.slice(0, 7)
    removedTwo = cl.slice(7, 14)
    removedThree = cl.slice(14, 21)
    removedFour = cl.slice(21, 28)
    removedFive = cl.slice(28, 35)

    calendarResponse = {
        removedOne,
        removedTwo,
        removedThree,
        removedFour,
        removedFive,

    }
    res.json(calendarResponse);
});


export default router