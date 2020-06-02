import express from 'express'
const router = express.Router();


import dataAvatarChange from './dataAvatarChange'
import dataAvatarDelete from './dataAvatarDelete';
import dataName from './dataName';
import dataEmail from './dataEmail'
import dataNumberPhone from './dataNumberPhone'
import dataPassword from './dataPassword'

router.use('/name', dataName);
router.use('/email', dataEmail);
router.use('/numberPhone', dataNumberPhone);
router.use('/password', dataPassword);
router.use('/avatarChange', dataAvatarChange);
router.use('/avatarDelete', dataAvatarDelete);

export default router 