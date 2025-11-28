import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = ({ employee }) => {
  const { filter, changeStatus } = useContext(TaskContext);

  const filteredTasks =
    filter === "All"
      ? employee.tasks
      : employee.tasks.filter(task => task.status === filter);

  return (
    <ul>
      {filteredTasks.map(task => (
        <li key={task.id} style={{ marginBottom: 10 }}>
          <strong>{task.title}</strong> — {task.status}

          <select
            value={task.status}
            onChange={e =>
              changeStatus(employee.id, task.id, e.target.value)
            }
            style={{ marginLeft: 10 }}
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
