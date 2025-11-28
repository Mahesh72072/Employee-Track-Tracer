import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import DashboardSummary from "../components/DashboardSummary";
import TaskStatusChart from "../components/TaskStatusChart";
import TaskTrendChart from "../components/TaskTrendChart";
import { motion } from "framer-motion";

const Dashboard = () => {
  const { employees } = useContext(TaskContext);

  return (
    <section className="section">
      <div className="section-header">
        <h2>Dashboard Overview</h2>
        <span className="section-tag">Live</span>
      </div>

      <DashboardSummary employees={employees} />

      <motion.div
        className="dashboard-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <TaskStatusChart employees={employees} />
        <TaskTrendChart employees={employees} />
      </motion.div>
    </section>
  );
};

export default Dashboard;
