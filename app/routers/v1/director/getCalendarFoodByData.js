import express from 'express'
const router = express.Router();

import * as CalendarFoodModelAPI from '../../../models/calendarFood'
import * as ClassAPI from '../../../models/classModel'

let dateFood = (date) => {
    return new Date(date)
}
router.post('/', async(req, res) => {
    try {
        let respons
        let dataClass = await ClassAPI.findClassByClass(req.body.numberClass)
        if (dataClass) {
            let food = await CalendarFoodModelAPI.findCalendarFoodByDateAndAdmin(req.body.date, dataClass.adminLogin)
            if (food) {

                res.status(200).json(food)
            } else {
                res.sendStatus(400)
            }
        } else {
            res.sendStatus(400)
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "sorry, the server crashed" });
    }
});


export default router