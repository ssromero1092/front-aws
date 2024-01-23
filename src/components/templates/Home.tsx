
// src/components/templates/Home.tsx
import React, { useEffect, useState } from 'react';
import TodoList from '../organisms/TodoList';
import TodoForm from '../organisms/TodoForm';
import { fetchTodos, createTodo, updateTodo, deleteTodo, Todo } from '../../services/api';
import './Home.css';

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const todosData = await fetchTodos();
      setTodos(todosData);
    };

    fetchData();
  }, []);

  const handleAddTodo = async (newTodo: Todo) => {
    const createdTodo = await createTodo(newTodo);
    setTodos([...todos, createdTodo]);
  };

  const handleUpdateTodo = async (id: number, updatedTodo: Todo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    );

    await updateTodo(id, updatedTodo);
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="home">
      <h1 className="home__title">Lista de Tareas</h1>
      <TodoList
        className="home__todo-list"
        todos={todos}
        onDelete={handleDeleteTodo} 
        onUpdate={handleUpdateTodo}
      />
      <TodoForm className="home__todo-form" onAddTodo={handleAddTodo} />
    </div>
  );
};

export default Home; 