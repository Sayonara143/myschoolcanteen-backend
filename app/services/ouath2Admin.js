let uid = require('uid-safe');
import * as AccessTokenAPI from '../models/accessTokenAdmin'
import * as RefreshTokenAPI from '../models/refreshTokenAdmin'
import * as AdminAPI from '../models/adminModel'



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
       
    return bearer;
}
 
async function token(req, res) {
    let login = req.body.login;
    let password = req.body.password;
    console.log('req.body',req.body)
    try {
        let admin = await AdminAPI.findAdminByLogin(login)
        if (!admin) {
            res.status(404).json({error: "admin not found"});
            return;
        }
       
        let hashParams = await(hashPromise({ password: password, salt: admin.salt }));
        if (hashParams.hash === admin.passwordHash) {
            await AccessTokenAPI.deleteByAdminLogin(admin.login);
            await RefreshTokenAPI.deleteByAdminLogin(admin.login);
 
            //create tokens
            let accessToken = await AccessTokenAPI.create(await createToken(), admin.login);
            let refreshToken = await RefreshTokenAPI.create(await createToken(), admin.login);
 
            res.status(200).json({
                accessToken: accessToken.value,
                refreshToken: refreshToken.value
            });
        }else{
            res.status(404).json({error: "error password"});
        }
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
            res.sendStatus(401);
            return;
        }
 
        let admin = await AdminAPI.findAdminByLogin(accessToken.admin)
        if (!admin) { //if accessToken doesn't linked with user
            res.sendStatus(401);
        }
 
        req.admin = admin;
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
            res.status(404).json({error: "token is not found"});
            return;
        }
 
        //find user
        let admin = await AdminAPI.findAdminByLogin(refreshToken.admin);
        if (!admin) {
            res.status(404).json({error: "the user's token search failed"});
            return;
        }
 
        //remove old access token
        await  AccessTokenAPI.deleteByAdminLogin(admin.login);
        await  RefreshTokenAPI.deleteByAdminLogin(admin.login);
        //create new access token
        let newAccessToken = await AccessTokenAPI.create(await createToken(), admin.login);
        let newRefreshToken = await RefreshTokenAPI.create(await createToken(), admin.login);
        res.status(200).json({
            accessToken: newAccessToken.value,
            refreshToken: newRefreshToken.value
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