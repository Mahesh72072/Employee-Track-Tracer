import React from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <motion.aside
      className="sidebar"
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="sidebar-logo">
        <span className="logo-dot" />
        <span className="logo-text">TaskFlow</span>
      </div>

      <nav className="sidebar-nav">
        <button className="sidebar-link sidebar-link-active">Dashboard</button>
        <button className="sidebar-link">Employees</button>
        <button className="sidebar-link">Reports</button>
        <button className="sidebar-link">Settings</button>
      </nav>

      <div className="sidebar-footer">
        <p className="sidebar-footer-title">Today’s Focus</p>
        <p className="sidebar-footer-text">Keep tasks flowing smoothly 🚀</p>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
