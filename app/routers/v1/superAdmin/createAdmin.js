import express from 'express'
const router = express.Router();
import * as AdminAPI from '../../../models/adminModel'
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
    if (input.name === null || input.login === null || input.surname === null ||  input.patronymic === null ) {
        return false;

    }
    else return true;
}


router.post('/', async (req, res)=>{
    data = req.body
    if(!checkInput(data)){
        res.sendstatus(400)
        return 
    } 


    const { name, surname, patronymic, login, password} = data

    try {
        const admin = await AdminAPI.findAdminByLogin(login)
        if (!admin) {
            const hashParams = await(hashPromise({ password: password }));
            const newAdminData = {
                name: name, 
                surname: surname, 
                patronymic: patronymic,
                login: login, 
                passwordHash: hashParams.hash,
                salt: hashParams.salt
            }
            await AdminAPI.createAdmin(newAdminData)
            res.sendStatus(200)
        }
        else {
            res.status(409).json({ loginFound: true })
        }
    }
    catch (err) {
        console.error(err)
        res.sendstatus(500)

    }
})

export default router 