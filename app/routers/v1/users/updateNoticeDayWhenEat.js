import express from 'express'
import * as NoticeApi from '../../../models/noticeDayModel'
import * as CalendarFoodModelAPI from '../../../models/calendarFood'
import * as UserApi from '../../../models/usersModel'
const router = express.Router();


let newNoticeData;
router.post('/', async(req, res) => {
    const user = req.user;
    const data = req.body;
    let d = new Date(data.date)
    let d2 = new Date()
    d2.setHours(d2.getHours() + 5)
    d.setHours(12, 0, 0, 0)
    const food = await CalendarFoodModelAPI.findCalendarFoodByDateAndAdminAndTicket(data.date, user.admin, user.ticket)
    if (data.flag === null || data.date === null) {
        res.json("empty data")
    } else {
        try {
          if (new Date(d) > new Date(d2)) {
            if (data.flag === true) {
              if (food.summa > user.balance) {
                res.sendStatus(501)
              } else{
                const uBalance = user.balance - food.summa
                newNoticeData = {
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
              }
            } else {
              const uBalance = Number(user.balance) + Number(food.summa)
              newNoticeData = {
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
            }
            await NoticeApi.UpdateNotice(newNoticeData)
            res.sendStatus(200);
          } else{
            res.sendStatus(403)
          }

        } catch (error) {
            res.sendStatus(500);
            console.log(error.message);
        }
    }
});


export default router