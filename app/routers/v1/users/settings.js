import express from 'express'
import * as UsersModelAPI from '../../../models/usersModel'
const router = express.Router();



router.get('/', async (req,res) => {
    const data = req.user
    const name = data.name;
    const surname = data.name;
    const patronymic = data.name;
    const email = data.email;
    const phone = data.name;
    const path = data.path;
    const object = {name: name, surname: surname, patronymic: patronymic, email: email, phone: phone, path: path};
    res.json(object)
});


export default router