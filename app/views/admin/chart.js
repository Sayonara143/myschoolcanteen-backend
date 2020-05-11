import express from 'express'
const router = express.Router();

router.get('/', async (req, res) => {

    await  res.sendfile("/app/public/views/admin/chart/index.html")
})

export default router