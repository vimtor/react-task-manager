import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef();
  const listRef = useRef();

  const pendingTasks = tasks.length;

  useEffect(() => {
    document.title = pendingTasks + " tasks remaining";
  }, [pendingTasks]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>Task Manager</h1>
      <p>Pending tasks: {pendingTasks}</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setTasks([title, ...tasks]);
          setTitle("");
          inputRef.current.focus();
          listRef.current.scrollTop = 0;
        }}
      >
        <input
          ref={inputRef}
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
      <ul ref={listRef} className="task-list">
        {tasks.map((task) => {
          return (
            <li
              onClick={() => {
                setTasks(tasks.filter((t) => t !== task));
              }}
            >
              {task}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
