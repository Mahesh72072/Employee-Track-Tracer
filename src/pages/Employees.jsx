import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import EmployeeCard from "../components/EmployeeCard";
import TaskFilter from "../components/TaskFilter";

const Employees = () => {
  const { employees } = useContext(TaskContext);

  return (
    <section className="section">
      <div className="section-header">
        <h2>Employees & Tasks</h2>
      </div>

      <TaskFilter />

      <div className="employee-grid">
        {employees.map(emp => (
          <EmployeeCard key={emp.id} employee={emp} />
        ))}
      </div>
    </section>
  );
};

export default Employees;
