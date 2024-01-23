// src/components/organisms/TodoForm.tsx
import React, { useState } from 'react';

// Importa la interfaz Todo desde el archivo donde la has definido (por ejemplo, api.ts)
import { Todo } from '../../services/api';
import './style.css';

interface TodoFormProps {
  onAddTodo: (newTodo: Todo) => void;
  className?: string;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo, className  }) => {
  const [newTodo, setNewTodo] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {    
    e.preventDefault();
    if (newTodo.trim() !== '') {
      onAddTodo({ id: Date.now(), title: newTodo, completed: false });
      setNewTodo('');
    }
  };

  return (
    <form className={`todo-form ${className}`} onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={handleChange} placeholder="Agregar nueva tarea" />
      <button className={`button ${className ? className : ''}`} type="submit">
        Agregar
      </button>
    </form>
  );
};

export default TodoForm;
