import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  const pendingTasks = tasks.length;

  return (
    <div>
      <h1>Task Manager</h1>
      <p>Pending tasks: {pendingTasks}</p>
      <div>
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <button
          onClick={() => {
            setTasks([title, ...tasks]);
            setTitle("");
          }}
        >
          Add
        </button>
      </div>
      <ul>
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
