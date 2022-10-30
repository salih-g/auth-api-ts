import express from 'express';
import validateResource from '../middleware/validateResource';
import { createUserHandler } from '../controller/user.controller';
import { createUserSchema } from '../schema/user.schema';

const router = express.Router();

router.post(
	'/api/users',
	validateResource(createUserSchema),
	createUserHandler,
);

export default router;
