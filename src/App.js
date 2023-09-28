import React, { useState , useEffect } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const storedCompletedTodos = JSON.parse(localStorage.getItem('completedTodos')) || [];
    setTodos(storedTodos);
    setCompletedTodos(storedCompletedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
  }, [completedTodos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    const completedTodo = todos.find((todo) => todo.id === id);

    if (completedTodo && completedTodo.completed) {
      setCompletedTodos([completedTodo, ...completedTodos]);
    } else {
      setCompletedTodos(completedTodos.filter((todo) => todo.id !== id));
    }

    setTodos(updatedTodos);
  };

  const resetTodos = () => {
    setTodos([]);
    setCompletedTodos([]);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>TODO App</h1>
        
        <button onClick={resetTodos} className="reset-button">
          Reset
        </button>
      </div>
      <TodoInput onAddTodo={addTodo} />
      <TodoList todos={todos} onComplete={completeTodo} />
      <div className="completed-todos">
        <h2>Completed Todos</h2>
        <TodoList todos={completedTodos} onComplete={completeTodo} />
      </div>
    </div>
  );
}

export default App;
