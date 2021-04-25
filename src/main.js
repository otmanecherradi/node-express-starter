import app from './app.js';

import env from './env.js';

const port = env.PORT || 8080;

app.listen(port, () => {
	console.log(`:: Listening on http://localhost:${port} ::`);
});
