require('dotenv').config();
import express from 'express';
import config from '../config';
import connectToDB from './utils/connectToDB';
import log from './utils/logger';
import router from './router';

const port = config.port;
const app = express();

app.use(router);

app.listen(port, () => {
	log.info(`App started at http://localhost:${port}`);

	connectToDB();
});
