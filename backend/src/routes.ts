import { Router } from 'express';

import { ensureAuthenticate } from './middlewares/ensureAuthenticate';

import CreateMessageController from './controllers/CreateMessageController';
import GetLast3MessagesController from './controllers/GetLast3MessagesController';
import AuthenticateUserController from './controllers/AuthenticateUserController';

export const router = Router();

router.post('/authenticate', AuthenticateUserController.handle);

router.get('/messages/last3', GetLast3MessagesController.handle);
router.post('/messages', ensureAuthenticate, CreateMessageController.handle);
