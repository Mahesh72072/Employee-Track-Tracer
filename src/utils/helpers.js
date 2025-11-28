export const countTasks = employees =>
  employees.reduce((acc, emp) => acc + emp.tasks.length, 0);

export const countCompleted = employees =>
  employees.reduce(
    (acc, emp) =>
      acc + emp.tasks.filter(task => task.status === "Completed").length,
    0
  );
