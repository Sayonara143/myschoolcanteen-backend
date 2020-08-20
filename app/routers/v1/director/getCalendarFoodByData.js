import express from 'express'
const router = express.Router();

import * as CalendarFoodModelAPI from '../../../models/calendarFood'
import * as ClassAPI from '../../../models/classModel'


router.post('/', async(req, res) => {
    try {
        let respons
        let dataClass = await ClassAPI.findClassByClass(req.body.numberClass)
        if (dataClass) {
            let food = await CalendarFoodModelAPI.findAllCalendarFoodClass(dataClass.adminLogin)
            console.log(food)
            for (let i = 0; i < food.length; i++) {
                if (Date.now(new Date(food[i].date)) === Date.now(new Date(req.body.date))) {
                    respons = food[i]
                }
            }
            res.status(200).json(respons)
        } else {
            res.sendStatus(400)
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "sorry, the server crashed" });
    }
});


export default router