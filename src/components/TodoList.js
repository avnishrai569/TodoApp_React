import React from 'react';
import TodoCard from './TodoCard';

function TodoList({ todos, onComplete }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} onComplete={onComplete} />
      ))}
    </div>
  );
}

export default TodoList;
