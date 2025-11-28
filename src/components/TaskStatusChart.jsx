import React, { useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const COLORS = ["#4d78ff", "#ffb74d", "#66bb6a"];

const TaskStatusChart = ({ employees }) => {
  const data = useMemo(() => {
    let pending = 0,
      inProgress = 0,
      completed = 0;

    employees.forEach(emp =>
      emp.tasks.forEach(task => {
        if (task.status === "Pending") pending++;
        else if (task.status === "In Progress") inProgress++;
        else if (task.status === "Completed") completed++;
      })
    );

    return [
      { name: "Pending", value: pending },
      { name: "In Progress", value: inProgress },
      { name: "Completed", value: completed }
    ];
  }, [employees]);

  return (
    <div className="card chart-card">
      <h3 className="chart-title">Task Status Distribution</h3>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={55}
              outerRadius={80}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={32} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TaskStatusChart;
