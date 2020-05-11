import express from 'express'
const router = express.Router();

router.use('/authorization', async function(req, res){

    await  res.sendfile(__dirname + "/public/views/authorization/index.html")
})

export default router