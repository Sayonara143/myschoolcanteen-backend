import express from 'express'
import * as UsersModelAPI from '../../../../models/usersModel'
import * as AccessTokenAPI from '../../../../models/accessTokenUsers'
const router = express.Router();
import hashkod from 'pbkdf2-password'

const hash = hashkod();
function hashPromise(hashingData) {
    return new Promise((resolve, reject) => {
        hash(hashingData, function (err, pass, salt, hash) {
            if (err) reject(err);

            resolve({ hash: hash, salt: salt });
        });
    });
}

router.post('/', async (req,res) => {
    let user = req.user;
    let password = req.body.password;
    if (user === null || password === null){
        res.sendStatus(400);
    }
    try {
        const hashParams = await(hashPromise({ password: password }));
        await UsersModelAPI.UpdateUsersPasswordHashSalt(user.login, hashParams.hash, hashParams.salt);
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
    }

});


export default router