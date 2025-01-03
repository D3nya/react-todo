import { useEffect, useState } from "react";

export function useTasks() {
  const [tasks, setTasks] = useState(() => {
    const localTasks = JSON.parse(localStorage.getItem("tasks"));

    if (!localTasks) {
      return [];
    } else {
      return localTasks;
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return [tasks, setTasks];
}
