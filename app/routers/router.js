import express from 'express'
const router = express.Router();

import v1Users from './v1/users/router'
import v1Admin from './v1/admin/router'
import v1Director from './v1/director/router'
import v1SuperAdmin from './v1/superAdmin/router'

import * as oauthUsers from '../services/ouath2Users'
import * as oauthAdmin from '../services/ouath2Admin'
import * as oauthSuperAdmin from '../services/ouath2SuperAdmin'
import * as oauthDirector from '../services/ouath2Director'

import v1SuperAdminReg from '../routers/v1/createSuperAdmin'

router.use('/api/v1/oauth/tokens/users', oauthUsers.token);
router.use('/api/v1/oauth/refresh/users', oauthUsers.refresh);

router.use('/api/v1/oauth/tokens/admin', oauthAdmin.token);
router.use('/api/v1/oauth/refresh/admin', oauthAdmin.refresh);

router.use('/api/v1/oauth/tokens/director', oauthDirector.token);
router.use('/api/v1/oauth/refresh/director', oauthDirector.refresh);

router.use('/api/v1/oauth/tokens/superAdmin', oauthSuperAdmin.token);
router.use('/api/v1/oauth/refresh/superAdmin', oauthSuperAdmin.refresh);

router.use('/api/v1/users', oauthUsers.authorize, v1Users);
router.use('/api/v1/admin', oauthAdmin.authorize, v1Admin);
router.use('/api/v1/director',oauthDirector.authorize, v1Director);

router.use('/api/v1/superAdmin', oauthSuperAdmin.authorize, v1SuperAdmin);

router.use('/api/v1/superAdminReg', v1SuperAdminReg);

export default router 
