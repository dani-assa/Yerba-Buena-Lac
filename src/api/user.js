import axios from "./axios";
// const URL_BASE = import.meta.env.VITE_URL_BASE;

export const registerRequest = (user) => axios.post(`/users/create`, user);

export const loginRequest = (user) => axios.post(`/users/login`, user);

export const verifyTokenRequest = () => axios.get('/users/verifyToken');
