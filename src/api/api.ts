import axios from 'axios';
import { getLocalStorage } from '../utils/LocalStorage';
import { Todo } from 'types/todo';
import { Auth } from 'types/auth';

const api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

// TODO Api
export const getTodos = () => api.get('/todos');
export const getTodoById = (id: string) => api.get(`/todos/${id}`);
export const createTodo = ({
  title,
  content,
}: Pick<Todo, 'title' | 'content'>) => api.post('/todos', { title, content });
export const updateTodo = ({
  id,
  title,
  content,
}: Pick<Todo, 'id' | 'title' | 'content'>) =>
  api.put(`/todos/${id}`, { title, content });
export const deleteTodo = (id: string) => api.delete(`/todos/${id}`);

// Auth Api
export const login = ({ email, password }: Auth) =>
  api.post(`/users/login`, { email, password });
export const signUp = ({ email, password }: Auth) =>
  api.post(`/users/create`, { email, password });

// interceptor
api.interceptors.request.use(function (config) {
  let token = getLocalStorage('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
