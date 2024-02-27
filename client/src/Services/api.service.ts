import axios, { AxiosError } from "axios";
import config from "../config";

const root = config.API_URL;

axios.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');
  console.log('Token', token);
  if (token && request.url?.includes(root)) 
    request.headers.Authorization = `Bearer ${token}`;

  return request
});

axios.interceptors.response.use((response) => {
  const authHeader = response.headers['authorization'];
  console.log('Auth Header', authHeader);
  if (authHeader) {
    const token = authHeader.split(' ')[1] as string;
    localStorage.setItem('token', token);
    console.log('Token res', token);
  }
  return response;
});

export const login = async (id: string, name: string) => {
  try {
    const res = await axios.post(root + '/user/login', { id, name });
    const authHeader = res.headers['authorization'];
    console.log('Auth Header', authHeader);
    if (authHeader) {
      const token = authHeader.split(' ')[1] as string;
      localStorage.setItem('token', token);
      console.log('Token res', token);
    }
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error((error as AxiosError<{ message: string }>).response?.data.message);
  }
}

export const getUserInfo = async () => {
  try {
    const res = await axios.get(root + '/user/auth');
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error((error as AxiosError<{ message: string }>).response?.data.message);
  }
}