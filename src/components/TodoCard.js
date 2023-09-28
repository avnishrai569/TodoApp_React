import React from 'react';

function TodoCard({ todo, onComplete }) {
  return (
    <div className={`todo-card ${todo.completed ? 'completed' : ''}`}>
      <div onClick={() => onComplete(todo.id)}>
        {todo.text}
      </div>
    </div>
  );
}

export default TodoCard;
