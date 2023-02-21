import axios from 'axios';
import { getLocalStorage } from '../utils/LocalStorage';

const api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

// TODO Api
export const getTodos = () => api.get('/todos');
export const getTodoById = (id) => api.get(`/todos/${id}`);
export const createTodo = ({ title, content }) =>
  api.post('/todos', { title, content });
export const updateTodo = ({ id, data }) => api.put(`/todos/${id}`, data);
export const deleteTodo = (id) => api.delete(`/todos/${id}`);

// Auth Api
export const login = ({ email, password }) =>
  api.post(`/users/login`, { email, password });
export const signUp = ({ email, password }) =>
  api.post(`/users/create`, { email, password });

// interceptor
api.interceptors.request.use(function (config) {
  let token = getLocalStorage('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
