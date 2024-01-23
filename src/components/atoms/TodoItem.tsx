// src/components/atoms/TodoItem.tsx
import React from 'react';
import { Todo } from '../../services/api';

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onUpdate: (id: number, updatedTodo: Todo) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onUpdate }) => {
  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleToggleComplete = () => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    onUpdate(todo.id, updatedTodo);
  };

  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={handleToggleComplete} />
      <span>{todo.title}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
