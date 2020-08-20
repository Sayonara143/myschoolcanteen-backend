import express from 'express'
const router = express.Router();
import * as CalendarFoodModelAPI from '../../../models/calendarFood'
import * as ClassAPI from '../../../models/classModel'


const checkInput = (input) => {
    if (input.date === null || input.summa === null || input.adminClass === null || input.eat === null || input.numberClass === null) {
        return false;

    } else return true;
}

router.post('/', async(req, res) => {
    const data = req.body
    if (!checkInput(data)) {
        res.sendStatus(400)
        return
    }

    const { numberClass, date, summa, eat, ticket } = data

    try {
        let dataClass = await ClassAPI.findClassByClass(numberClass)
        if (dataClass) {
            const newCalendarData = {
                eat: eat,
                adminClass: dataClass.adminLogin,
                summa: summa,
                date: date,
                ticket: ticket
            }
            await CalendarFoodModelAPI.UpdateCalendarFood(newCalendarData)
            res.sendStatus(200)
        } else {
            res.sendStatus(400)
        }


    } catch (err) {
        console.error(err)
        res.sendStatus(500)

    }
})

export default router