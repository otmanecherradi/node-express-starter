import { HTTP_500_INTERNAL_SERVER_ERROR } from '../utils/status.js';

class BasicError extends Error {
	constructor(message, code = 'BASIC_ERROR') {
		super(message);
		this.code = code;

		this.status = HTTP_500_INTERNAL_SERVER_ERROR;
	}
}

export default BasicError;
