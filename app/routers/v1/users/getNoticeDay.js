import express from 'express'
import * as NoticeApi from '../../../models/noticeDayModel'
const router = express.Router();



router.post('/', async(req, res) => {
    const user = req.user;
    const data = req.body;
    if (data.flag === null || data.date === null) {
        res.json("empty data")
    } else {
        try {
            const list = {
                user: {
                    name: user.name,
                    surname: user.surname,
                    patronymic: user.patronymic,
                    login: user.login,
                    ticket: user.ticket,
                },
                date: data.date
            }
            const notice = await NoticeApi.findNoticeUser(list)
            res.status(200).json(list);
        } catch (error) {
            res.sendStatus(500);
            console.log(error.message);
        }
    }
});


export default router