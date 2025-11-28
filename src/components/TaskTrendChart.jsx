import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const TaskTrendChart = ({ employees }) => {
  const data = useMemo(
    () =>
      employees.map(emp => ({
        name: emp.name.split(" ")[0],
        tasks: emp.tasks.length
      })),
    [employees]
  );

  return (
    <div className="card chart-card">
      <h3 className="chart-title">Tasks per Employee</h3>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={32}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="tasks" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TaskTrendChart;
