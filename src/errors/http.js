import BasicError from './base.js';

class HttpError extends BasicError {
	constructor(message, code = 'HTTP_ERROR') {
		super(message);
		this.code = code;
	}
}

export default HttpError;
