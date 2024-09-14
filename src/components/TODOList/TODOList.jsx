import React from "react";

export default function TODOList({ todos, setTodos }) {
  return (
    <ol className="todo_list">
      {todos && todos.length > 0 ? (
        todos?.map((item, index) => (
          <Item key={index} item={item} setTodos={setTodos} todos={todos} />
        ))
      ) : (
        <p>Seems pretty spare...What u upto?!</p>
      )}
    </ol>
  );
}

function Item({ item, todos, setTodos }) {
  const [editing, setEditing] = React.useState(false);
  const inputRef = React.useRef(null);

  const completeTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id
          ? { ...todo, is_completed: !todo.is_completed }
          : todo
      )
    );
  };

  const updatedTodos = JSON.stringify(todos);
  localStorage.setItem("todos", updatedTodos);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));
    const updatedTodos = JSON.stringify(
      todos.filter((todo) => todo.id !== item.id)
    );
    localStorage.setItem("todos", updatedTodos);
  };

  React.useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      // position the cursor at the end of the text
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [editing]);
  const handleInpuSubmit = (event) => {
    event.preventDefault();
    const updatedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", updatedTodos);
    setEditing(false);
  };
  const handleInputBlur = () => {
    const updatedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", updatedTodos);
    setEditing(false);
  };

  const handleInputChange = (e) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, title: e.target.value } : todo
      )
    );
  };

  return (
    <li id="item?.id" className="todo_item">
      {editing ? (
        <form className="edit-form" onSubmit={handleInpuSubmit}>
          <label htmlFor="edit-todo">
            <input
              ref={inputRef}
              type="text"
              name="edit-todo"
              id="edit-todo"
              defaultValue={item?.title}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
            />
          </label>
        </form>
      ) : (
        <>
          <button className="todo_items_left" onClick={completeTodo}>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill={item.is_completed ? "#22C55E" : "#0d0d0d"}
            >
              <circle cx="12" cy="12" r="10" stroke="#c2b39a" strokeWidth="2" />
              <path d="M7 13L10 16L17 9" stroke="#22C55E" strokeWidth="2" />
            </svg>
            <p
              style={
                item.is_completed ? { textDecoration: "line-through" } : {}
              }
            >
              {item?.title}
            </p>
          </button>
          <div className="todo_items_right">
            <button onClick={handleEdit} className="edit-btn">
              <span className="visually-hidden">Edit</span>
              <img src="/src/assets/edit.png" />
            </button>
            <button onClick={handleDelete} className="delete-btn">
              <span className="visually-hidden">Delete</span>
              <img src="/src/assets/delete.png" />
            </button>
          </div>
        </>
      )}
    </li>
  );
}
