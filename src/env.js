import { config } from 'dotenv';

config();

const NODE_ENV = process.env.NODE_ENV;

const PORT = process.env.PORT;
const COOKIES_SECRET = process.env.COOKIES_SECRET;

// Add additional variables here
// const VAR_1 = process.env.VAR_1;

// Add the variables here to have intellisense
const env = {
	NODE_ENV,

	PORT,
	COOKIES_SECRET,

	// VAR_1,
};

Object.entries(env).forEach(([name, value]) => {
	if (!value) {
		throw new Error(`${name} is not specified in the .env file!`);
	}
});

export default env;
