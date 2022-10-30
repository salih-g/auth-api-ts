import { object, string, TypeOf } from 'zod';

export const createUserSchema = object({
	body: object({
		firstName: string({
			required_error: 'First name is required.',
		}),
		lastName: string({
			required_error: 'Last name is required.',
		}),
		password: string({
			required_error: 'Password name is required.',
		}).min(6, 'Password is too short should be minimum 6 chars.'),
		paswordConfirmation: string({
			required_error: 'Password confirmation is required.',
		}),
		email: string({
			required_error: 'Email is required.',
		}).email('Not a valid email.'),
	}).refine((data) => data.password === data.paswordConfirmation, {
		message: 'Password do not match',
		path: ['paswordConfirmation'],
	}),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>['body'];
