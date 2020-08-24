import express from 'express'
import * as NoticeApi from '../../../models/noticeDayModel'
import * as CalendarFoodModelAPI from '../../../models/calendarFood'
import * as UserApi from '../../../models/usersModel'
const router = express.Router();



router.post('/', async(req, res) => {
    const user = req.user;
    const data = req.body;
    if (data.flag === null || data.date === null) {
        res.json("empty data")
    } else {
        try {
          const food = await CalendarFoodModelAPI.findCalendarFoodByDateAndAdminAndTicket(data.date, user.admin, user.ticket)
          if (food.summa > user.balance) {
            res.sendStatus(501)
          } else{
            const uBalance = user.balance - food.summa
            const newNoticeData = {
              user: {
                name: user.name,
                surname: user.surname,
                patronymic: user.patronymic,
                login: user.login,
                ticket: user.ticket,
              },
              adminLogin: user.admin,
              flag: data.flag,
              date: data.date
            }
            await UserApi.UpdateUsersBalance(user.login, uBalance)
            await NoticeApi.createNotice(newNoticeData)
            res.sendStatus(200);
          }
        } catch (error) {
            res.sendStatus(500);
            console.log(error.message);
        }
    }
});


export default router