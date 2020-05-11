import express from 'express'
const router = express.Router();

router.get('/', async (req, res) =>{

    await  res.sendfile("/app/public/views/admin/student/index.html")
})

export default router