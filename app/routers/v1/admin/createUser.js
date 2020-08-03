import express from 'express'
const router = express.Router();
import * as UsersModelAPI from '../../../models/usersModel'
import hashkod from 'pbkdf2-password'
let data;
const hash = hashkod();
function hashPromise(hashingData) {
    return new Promise((resolve, reject) => {
        hash(hashingData, function (err, pass, salt, hash) {
            if (err) reject(err);

            resolve({ hash: hash, salt: salt });
        });
    });
}

const checkInput = (input) => {
    if (input.name === null || input.login === null || input.surname === null ||  input.patronymic === null ||  input.numberPhone === null || input.password === null || input.ticket === null) {
        return false;

    }
    else return true;
}


router.post('/', async (req, res)=>{
    data = req.body
    const admin = req.admin.login
    if(!checkInput(data)){
        res.status(400).json({error: "data is not found"})
        return 
    } 

    const { name, surname, patronymic, login, password, ticket} = data

    try {
        const user = await UsersModelAPI.findUserByLogin(login)
        if (!user) {
            const hashParams = await(hashPromise({ password: password }));
            const newUserData = {
                name: name, 
                surname: surname, 
                patronymic: patronymic,
                login: login, 
                admin: admin,
                ticket: ticket,
                passwordHash: hashParams.hash,
                salt: hashParams.salt
            }
            await UsersModelAPI.createUsers(newUserData)
            res.sendStatus(200)
        }
        else {
            res.status(409).json({ loginFound: true })
        }
    }
    catch (err) {
        console.error(err)
        res.res.status(500).json({error: "sorry, the server crashed"});

    }
})

export default router 