import express from 'express'
const router = express.Router();

import * as CalendarFoodModelAPI from '../../../models/calendarFood'
import * as ClassAPI from '../../../models/classModel'

router.post('/', async(req, res) => {
    try {
        if (dataClass) {
            let food = await CalendarFoodModelAPI.findCalendarFoodByDateAndAdminAndTicket(req.body.date, req.user.admin, req.user.ticket)
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