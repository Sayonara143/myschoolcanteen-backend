let uid = require('uid-safe');
import * as AccessTokenAPI from '../models/accessTokenDirector'
import * as RefreshTokenAPI from '../models/refreshTokenDirector'
import * as DirectorAPI from '../models/directorModel'



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
        let director = await DirectorAPI.findDirectorByLogin(login);
        console.log(director);
        if (!director) {
            res.sendStatus(404);
            return;
        }
       
        let hashParams = await(hashPromise({ password: password, salt: director.salt }));
        if (hashParams.hash === director.passwordHash) {
            await AccessTokenAPI.deleteByDirectorLogin(director.login);
            await RefreshTokenAPI.deleteByDirectorLogin(director.login);
 
            //create tokens
            let accessToken = await AccessTokenAPI.create(await createToken(), director.login);
            let refreshToken = await RefreshTokenAPI.create(await createToken(), director.login);
 
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
 
        let director = await DirectorAPI.findDirectorByLogin(accessToken.director);
        if (!director) { //if accessToken doesn't linked with user
            res.sendStatus(401);
        }
 
        req.director = director;
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
        let director = await DirectorAPI.findDirectorByLogin(refreshToken.director);
        if (!director) {
            res.sendStatus(404);
            return;
        }
 
        //remove old access token
        await AccessTokenAPI.deleteByDirectorLogin(director.login);
 
        //create new access token
        let newAccessToken = await AccessTokenAPI.create(await createToken(), director.login);
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