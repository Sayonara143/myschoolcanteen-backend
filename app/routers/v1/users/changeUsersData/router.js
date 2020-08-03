import express from 'express'
const router = express.Router();


import dataPassword from './dataPassword'

router.use('/password', dataPassword);

export default router 