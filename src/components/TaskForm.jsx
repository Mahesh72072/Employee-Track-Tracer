import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = ({ employeeId }) => {
  const [title, setTitle] = useState("");
  const { addTask } = useContext(TaskContext);

  const submit = e => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask(employeeId, title);
    setTitle("");
  };

  return (
    <form onSubmit={submit} style={{ marginTop: 10 }}>
      <input
        type="text"
        placeholder="New task"
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{ padding: 5 }}
      />
      <button type="submit" style={{ marginLeft: 8 }}>
        Add
      </button>
    </form>
  );
};

export default TaskForm;
