import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskFilter = () => {
  const { filter, setFilter } = useContext(TaskContext);

  return (
    <div className="filter-bar">
      <span className="filter-label">Filter by status:</span>
      <select
        className="filter-select"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
};

export default TaskFilter;
