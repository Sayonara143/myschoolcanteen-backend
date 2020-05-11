import express from 'express'
const router = express.Router();

router.get('/students', async function(req, res){

    await  res.sendfile("/app/public/views/admin/students/index.html")
})

export default router