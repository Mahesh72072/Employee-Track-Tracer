import React from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { motion } from "framer-motion";

const EmployeeCard = ({ employee }) => {
  return (
    <motion.div
      className="card employee-card"
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="employee-header">
        <div>
          <h3>{employee.name}</h3>
          <p className="employee-role">{employee.role}</p>
        </div>
        <span className="employee-task-count">
          {employee.tasks.length} tasks
        </span>
      </div>

      <TaskList employee={employee} />
      <TaskForm employeeId={employee.id} />
    </motion.div>
  );
};

export default EmployeeCard;
