import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header'
import Todo from './components/Todo'
import TodoList from './components/TodoList'
import Button from './components/Button'
import ModalCreate from './components/ModalCreate'

const todos = [
  { number: 1, title: "College", isDone: false },
  { number: 2, title: "Workout", isDone: false },
  { number: 3, title: "Working on Project", isDone: true },
  { number: 4, title: "Doing Homework", isDone: false },
  { number: 5, title: "Learn", isDone: true }
]

function App() {
  const [stateTodos, setStateTodos] = useState([]);
  const [collapsible, setCollapsible] = useState(false);

  useEffect(() => {
    setStateTodos(todos);
  }, []);

  const toggleState = (e) => {
    const todosCurrent = stateTodos.map(todo => {
      if(todo.number.toString() === e.target.id) {
        const { number, title, isDone } = todo;
        return { number, title, isDone: !isDone }
      } else {
        return todo;
      }      
    })
    setStateTodos(todosCurrent);
  }

  const addTodo = (title) => {
    const newTodo = {
      number: stateTodos.length + 1,
      title,
      isDone: false
    }
    setStateTodos([...stateTodos, newTodo]);
  }

  return (
    <div className="App">
      <Header />
      <TodoList heading="UPCOMING">
        {
          stateTodos
            .filter(todo => !todo.isDone)
            .map(todo => {
            return (
              <Todo 
                key={todo.number} 
                todo={todo}
                onClick={toggleState} />
            )
          })
        }
      </TodoList>
      <TodoList heading="FINISHED">
        {
          stateTodos
            .filter(todo => todo.isDone)
            .map(todo => {
            return (
              <Todo 
              key={todo.number}
              todo={todo}
              onClick={toggleState} />
            )
          })
        }
      </TodoList>
      <Button onClick={() => setCollapsible(!collapsible)} />
      <ModalCreate
        addTodo={addTodo} 
        closeModal={() => setCollapsible(false)}
        collapsible={collapsible} 
      />
    </div>
  );
}

export default App;
