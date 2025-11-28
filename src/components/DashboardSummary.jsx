import React from "react";
import { countTasks, countCompleted } from "../utils/helpers";
import { motion } from "framer-motion";

const DashboardSummary = ({ employees }) => {
  const total = countTasks(employees);
  const completed = countCompleted(employees);
  const pending = total - completed;
  const completionRate = total === 0 ? 0 : Math.round((completed / total) * 100);

  const cards = [
    { label: "Total Tasks", value: total },
    { label: "Completed", value: completed },
    { label: "Pending", value: pending },
    { label: "Completion Rate", value: `${completionRate}%` }
  ];

  return (
    <div className="summary-grid">
      {cards.map((card, index) => (
        <motion.div
          className="card kpi-card"
          key={card.label}
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.07, duration: 0.25 }}
        >
          <p className="kpi-label">{card.label}</p>
          <p className="kpi-value">{card.value}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default DashboardSummary;
