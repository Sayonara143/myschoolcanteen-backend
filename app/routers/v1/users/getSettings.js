import express from 'express'
import * as UsersModelAPI from '../../../models/usersModel'
const router = express.Router();



router.get('/', async (req,res) => {
    const data = req.user
    const name = data.name;
    const surname = data.surname;
    const patronymic = data.patronymic;
    const object = {name: name, surname: surname, patronymic: patronymic};
    res.json(object)
});


export default router