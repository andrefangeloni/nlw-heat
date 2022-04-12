import { Router } from 'express';

import { ensureAuthenticate } from './middlewares/ensureAuthenticate';

import CreateMessageController from './controllers/CreateMessageController';
import AuthenticateUserController from './controllers/AuthenticateUserController';

export const router = Router();

router.post('/authenticate', AuthenticateUserController.handle);

router.post('/messages', ensureAuthenticate, CreateMessageController.handle);
