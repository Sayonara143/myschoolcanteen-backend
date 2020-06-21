import express from 'express'
import * as CalendarFoodModelAPI from '../../../models/calendarFood'
const router = express.Router();



router.get('/', async (req,res) => {
    const user = req.user;
    const date = req.body.date;
    const calendarFood = await CalendarFoodModelAPI.findAllCalendarFoodClass(user.admin);
    res.json(calendarFood);
});


export default router