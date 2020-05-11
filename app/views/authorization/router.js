import express from 'express'
const router = express.Router();


import viewsAuthorization from './authorization'


router.use('/', viewsAuthorization);


export default router 