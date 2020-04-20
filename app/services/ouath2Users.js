let uid = require('uid-safe');
import * as AccessTokenAPI from '../models/accessTokenUsers'
import * as RefreshTokenAPI from '../models/refreshTokenUsers'
import * as UsersAPI from '../models/usersModel'



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


function createToken() {
    return uid(32);
}
 
function parseBearer(req) {
    let authHeader = req.get('Authorization');
    let bearer = '';
 
    if (authHeader)
        bearer = authHeader.split(' ')[1];
        console.log(bearer);
       
    return bearer;
}
 
async function token(req, res) {
    let login = req.body.login;
    let password = req.body.password;
    console.log('req.body',req.body)
    try {
        let user = await UsersAPI.findUserByLogin(login);
        console.log(user);
        if (!user) {
            res.sendStatus(404);
            return;
        }
       
        let hashParams = await(hashPromise({ password: password, salt: user.salt }));
        if (hashParams.hash === user.passwordHash) {
            await AccessTokenAPI.deleteByUserLogin(user.login);
            await RefreshTokenAPI.deleteByUserLogin(user.login);
 
            //create tokens
            let accessToken = await AccessTokenAPI.create(await createToken(), user.login);
            let refreshToken = await RefreshTokenAPI.create(await createToken(), user.login);
 
            res.status(200).json({
                accessToken: accessToken.value,
                refreshToken: refreshToken.value
            });
        }
        else
            res.sendStatus(404);
    }
    catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}
 
async function authorize(req, res, next) {
    let bearer = parseBearer(req);
 
    try {
        let accessToken = await AccessTokenAPI.findByValue(bearer);
        if (!accessToken) { //if accessToken not found
            console.log('accessToken not found')
            res.sendStatus(401);
            return;
        }
 
        let user = await UsersAPI.findUserByLogin(accessToken.user);
        if (!user) { //if accessToken doesn't linked with user
            res.sendStatus(401);
        }
 
        req.user = user;
        next();
    }
    catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}
 
 
 
 
 
async function refresh(req, res) {
    let token = req.body.refreshToken;
    console.log('token',token);
 
    try {
        //find refresh token
        let refreshToken = await RefreshTokenAPI.findByValue(token);
        if (!refreshToken) {
            res.sendStatus(404);
            return;
        }
 
        //find user
        let user = await UsersAPI.findUserByLogin(refreshToken.user);
        if (!user) {
            res.sendStatus(404);
            return;
        }
 
        //remove old access token
        await AccessTokenAPI.deleteByUserLogin(user.login);
 
        //create new access token
        let newAccessToken = await AccessTokenAPI.create(await createToken(), user.login);
        res.status(200).json({
            accessToken: newAccessToken.value
        });
    }
    catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}


export{
    token,
    authorize,
    refresh,
}