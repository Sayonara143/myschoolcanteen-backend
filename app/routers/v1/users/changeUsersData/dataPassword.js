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

router.get('/', async (req,res) => {
    const user = req.user;
    let password = req.body.password;
    const hashParams = await(hashPromise({ password: password }));
    await UsersModelAPI.UpdateUsersPasswordHashSalt(user.login, hashParams.hash, hashParams.salt)
    res.json(object);
});


export default router