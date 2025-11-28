import React from "react";
import { motion } from "framer-motion";

const Topbar = () => {
  return (
    <motion.header
      className="topbar"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div>
        <h1 className="topbar-title">Employee Task Tracker</h1>
        <p className="topbar-subtitle">
          Monitor tasks, track progress, and keep your team aligned.
        </p>
      </div>

      <div className="topbar-right">
        <input
          className="topbar-search"
          placeholder="Search employee or task..."
        />
        <div className="avatar-circle">MM</div>
      </div>
    </motion.header>
  );
};

export default Topbar;
