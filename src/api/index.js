import { Router } from 'express';

import v1API from './v1/index.js';

const router = Router();

router.get('/', (req, res) => {
	res.json({
		msg: '💻 Welcome to the API 💻',
	});
});

router.use('/v1', v1API);

export default router;
