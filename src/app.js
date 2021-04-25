import express from 'express';

import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';

import env from './env.js';

// Configs
import * as xsrfConfig from './config/xsrf.js';

// Middlewares
import { errorMiddleware } from './middlewares/index.js';

// Routes
import APIRoutes from './api/index.js';

// Initiate App
const app = express();

// Logger
app.use(morgan('dev'));

app.use(compression());
app.use(helmet());
app.use(cors());

// trust first proxy
app.set('trust proxy', 1);

// Cookies Setup
app.use(cookieParser(env.COOKIES_SECRET));

// Support for both JSON and FormData
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
	csurf({
		cookie: xsrfConfig.xsrfCookieOptions,
		value: (req) => xsrfConfig.getXSRFTokenValue(req),
	})
);

// Routes
app.use('/api', APIRoutes);
// app.use('/', );

// Error handles
app.use(errorMiddleware.notFound());
app.use(errorMiddleware.errorHandler());

export default app;
