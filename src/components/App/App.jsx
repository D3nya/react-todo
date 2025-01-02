import React from "react";

import TaskList from "../TaskList/TaskList";
import TaskForm from "../TaskForm/TaskForm";
import Header from "../Header/Header";

function App() {
  const [task, setTask] = React.useState("");
  const [tasks, setTasks] = React.useState(() => {
    const localTasks = localStorage.getItem("tasks");

    if (localTasks == null || localTasks == "[]")
      return [
        {
          id: Date.now(),
          text: "It is simple To Do, delete this and start working 😊",
          completed: false,
        },
      ];
    else return JSON.parse(localTasks);
  });

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="min-h-screen flex justify-center bg-slate-200 dark:bg-slate-800 p-4">
      <div className="max-w-screen-xl grow rounded-lg bg-white dark:bg-slate-700 px-6 py-8">
        <Header />
        <TaskForm task={task} setTask={setTask} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
