import React, { useState } from 'react';

function TodoInput({ onAddTodo }) {
  const [text, setText] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && text.trim() !== '') {
      onAddTodo(text);
      setText('');
    }
  };

  return (
    <input
      type="text"
      placeholder="Add a new TODO..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyPress={handleKeyPress}
    />
  );
}

export default TodoInput;
