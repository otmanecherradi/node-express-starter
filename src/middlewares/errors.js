import HttpError from '../errors/http.js';

import env from '../env.js';

/**
 *
 * @returns {import("express").RequestHandler}
 */
export function notFound() {
	return async function (req, res, next) {
		const error = new HttpError('💀 - 404 Not Found - 💀');
		res.status(404);
		next(error);
	};
}

/**
 *
 * @returns {import("express").ErrorRequestHandler}
 */
export function errorHandler() {
	// eslint-disable-next-line no-unused-vars
	return async function (error, req, res, next) {
		let statusCode = error.statusCode || 500;
		if (statusCode < 400) {
			statusCode = 500;
		}

		if (env.NODE_ENV !== 'production') {
			console.error(error);
		}

		res.status(statusCode);

		return res.json({
			error: {
				message: error.message,
				code: error.code,
				status: statusCode,
				stack: env.NODE_ENV === 'production' ? '💀 PRODUCTION 💀' : error.stack,
			},
			status: 'ERROR',
		});
	};
}
