import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

// TODO Api
export const getTodos = () => api.get("/todos");
export const getTodoById = (id) => api.get(`/todos/${id}`);
export const createTodo = ({ title, content }) =>
  api.post("/todos", { title, content });
export const updateTodo = (id, { title, content }) =>
  api.put(`/todos/${id}`, { title, content });
export const deleteTodo = (id) => api.delete(`/todos/${id}`);

// Auth Api
export const login = ({ email, password }) =>
  api.post(`/users/login`, { email, password });
export const signUp = ({ email, password }) =>
  api.post(`/users/create`, { email, password });
