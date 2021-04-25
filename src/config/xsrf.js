/**
 * @type {import("csurf").CookieOptions}
 */
export const xsrfCookieOptions = {
	key: '__xsrf',
	maxAge: 36e5, // 1 hour
	sameSite: true,
	signed: true,
};

/**
 *
 * @param {import("express").Request} req
 */
export function getXSRFTokenValue(req) {
	if (req.query && req.query.xsrf) {
		return req.query.xsrf;
	}

	if (req.body && req.body._xsrf) {
		return req.body._xsrf;
	}

	if (req.headers['xsrf-token']) {
		return req.headers['xsrf-token'];
	}

	return '';
}
