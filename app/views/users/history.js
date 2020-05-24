import express from 'express'
const router = express.Router();

router.use('/', async (req, res) => {

    await res.sendfile("/app/public/views/users//history/index.html")
})

export default router