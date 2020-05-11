import express from 'express'
const router = express.Router();

router.use('/', async function(req, res){

    await  res.sendfile("/app/public/views/authorizationDirector/index.html")
})

export default router