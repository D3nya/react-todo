import { createContext, useContext } from "react";

import { useTasks } from "../hooks/useTasks";

const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useTasks();

  const addTask = (text) => {
    if (!text.trim()) {
      alert("Task cannot be empty!");
      return false;
    } else if (text.length > 100) {
      alert("Task is too long! Maximum 100 characters.");
      return false;
    } else if (tasks.find((task) => task.text === text)) {
      alert("This task already exists!");
      return false;
    }

    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Date.now(), text, completed: false },
    ]);

    return true;
  };

  const deleteTask = (id) => {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
  };

  const toggleTask = (id) => {
    setTasks((currentTasks) => {
      return currentTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else return task;
      });
    });
  };

  return (
    <TasksContext.Provider
      value={{ tasks, setTasks, addTask, deleteTask, toggleTask }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export function useTasksContext() {
  return useContext(TasksContext);
}
