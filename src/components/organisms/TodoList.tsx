// src/components/organisms/TodoList.tsx
import React from 'react';
import { Todo } from '../../services/api';
import './style.css';

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onUpdate: (id: number, updatedTodo: Todo) => void;
  className?: string;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onUpdate, className }) => {
  return (
    <div className={`todo-list ${className}`}>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-list__item">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onUpdate(todo.id, { ...todo, completed: !todo.completed })}
          />
          <span className="todo-list__item-title">{todo.title}</span>
          <button className="button" onClick={() => onDelete(todo.id)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
