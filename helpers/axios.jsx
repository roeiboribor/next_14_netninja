import Axios from 'axios';

const axios = Axios.create({
	baseURL: process.env.NEXT_LOCAL_PUBLIC_BACKEND_URL + '/api',
	withCredentials: true,
});

export const internalAxios = Axios.create({
	baseURL: process.env.NEXTAUTH_URL,
});

export default axios;
