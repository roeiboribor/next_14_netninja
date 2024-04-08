import axios from '@/helpers/axios';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
					placeholder: 'Enter your email',
				},
				password: {
					label: 'Password',
					type: 'password',
					placeholder: 'Enter your password',
				},
			},
			async authorize(credentials) {
				const response = await axios
					.post('login', {
						email: credentials.email,
						password: credentials.password,
					})
					.then(({ data: { user, token } }) => {
						return {
							id: user.id,
							name: user.name,
							email: user.email,
							token: token,
						};
					});

				if (response) {
					return response;
				} else {
					return null;
				}
			},
		}),
	],
};
