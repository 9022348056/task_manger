import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("medium");

  const addTask = () => {
    if (taskText.trim() === "") return;
    const newTask = { text: taskText, priority };
    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <select onChange={(e) => setPriority(e.target.value)} value={priority}>
          <option value="high">🔥 High</option>
          <option value="medium">⚡ Medium</option>
          <option value="low">✅ Low</option>
        </select>
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={`task ${task.priority}-priority`}>
            <span>{task.text}</span>
            <button className="delete" onClick={() => deleteTask(index)}>
              ❌ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
