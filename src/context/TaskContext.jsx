import { createContext, useState } from "react";
import data from "../data/mockData.json";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [employees, setEmployees] = useState(data.employees);
  const [filter, setFilter] = useState("All");

  const addTask = (employeeId, title) => {
    setEmployees(prev =>
      prev.map(emp =>
        emp.id === employeeId
          ? {
              ...emp,
              tasks: [
                ...emp.tasks,
                { id: Date.now(), title, status: "Pending" }
              ]
            }
          : emp
      )
    );
  };

  const changeStatus = (employeeId, taskId, status) => {
    setEmployees(prev =>
      prev.map(emp =>
        emp.id === employeeId
          ? {
              ...emp,
              tasks: emp.tasks.map(task =>
                task.id === taskId ? { ...task, status } : task
              )
            }
          : emp
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{
        employees,
        filter,
        setFilter,
        addTask,
        changeStatus
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
