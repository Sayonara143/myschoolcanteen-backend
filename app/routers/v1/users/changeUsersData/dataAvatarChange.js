import express from 'express'
import * as UsersModelAPI from '../../../../models/usersModel'
const router = express.Router();
import multer from 'multer'

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null,"./public/image");
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});
router.use(multer({storage:storageConfig}).single('file'));
router.post('/',  async (req,res) => {
    const user = req.user;
    let filedata = req.file;
    console.log(filedata);
    let path = filedata.originalname;
    if(!filedata){
        res.sendStatus(400);
    }
    else{
        await UsersModelAPI.UpdateUsersPath(user.login, path);
       res.sendStatus(200);
    }
    
});


export default router