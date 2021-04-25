import { Router } from 'express';

import frontendControllers from './frontend/index.js';

const router = Router();

router.use('/fn', frontendControllers);

export default router;
