import axios from "axios";
const URL_BASE = import.meta.env.VITE_URL_BASE;

export const registerRequest = (user) => axios.post(`${URL_BASE}/users/create`, user)