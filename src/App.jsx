import React from "react";
import { TaskProvider } from "./context/TaskContext";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";

function App() {
  return (
    <TaskProvider>
      <div className="app-container">
        <Sidebar />

        <div className="app-main">
          <Topbar />

          <main className="app-content">
            <Dashboard />
            <Employees />
          </main>
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
