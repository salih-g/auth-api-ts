require('dotenv').config();

export default {
	port: process.env.PORT || 8081,
	dbUri: process.env.MONGO_URL || 'mongodb://localhost:27017/auth-api-tutorial',
	logLevel: 'info',
};
