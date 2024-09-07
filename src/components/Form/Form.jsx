import React from 'react'

export default function Form({ todos, setTodos }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.todo.value;
    const newTodo = {
      title: value,
      id: self.crypto.randomUUID(),
      is_completed: false,
    };
    setTodos((prevTodos) => [
      ...prevTodos, newTodo]);
      const updatedTodoList = JSON.stringify([...todos, newTodo]);
      localStorage.setItem("todos", updatedTodoList);
    e.target.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Enter the Next Task                (Character-Limit: 30)"
          maxLength={30}
          required
        />
      </label>
      <button className='add-todo'>
        <span className="visually-hidden">Add</span>
        <img src="/public/images/add.png" alt="add" />
      </button>
    </form>
  );
}
