// src/services/api.ts
import axios from 'axios';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

//export const API_BASE_URL = 'http://18.188.216.166:3001';
export const API_BASE_URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await api.get('/todos');
  return response.data;
};

export const createTodo = async (newTodo: Todo): Promise<Todo> => {  
  const response = await api.post('/todos', newTodo);
  return response.data;
};

export const updateTodo = async (id: number, updatedTodo: Todo): Promise<Todo> => {
  const response = await api.put(`/todos/${id}`, updatedTodo);
  return response.data;
};

export const deleteTodo = async (id: number): Promise<void> => {
  await api.delete(`/todos/${id}`);
};

export default api;
