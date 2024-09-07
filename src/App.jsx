import './App.css'
import Form from './components/Form/Form'
import ToDoHero from './components/TODOHero/TODOHero'
import TODOList from './components/TODOList/TODOList'
import Header from './components/Header/Header'
import React, { useState } from 'react'

function App() {

  const [todos, setTodos] = useState([]);

  React.useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const todos_completed=todos.filter((todo)=>todo.is_completed===true).length;
  const total_todos=todos.length;

  return (
    <div className='wrapper'>
      <Header />
      <ToDoHero todos_completed={todos_completed} total_todos={total_todos}/>
      <Form todos={todos} setTodos={setTodos}/>
      <TODOList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
