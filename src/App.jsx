import React, { useState } from "react";

import TasksList from "./components/TasksList/TasksList";
import TaskForm from "./components/TaskForm/TaskForm";
import Header from "./components/Header/Header";

import { TasksProvider } from "./contexts/TasksContext";

function App() {
  return (
    <TasksProvider>
      <div className="min-h-screen flex justify-center bg-slate-200 dark:bg-slate-800 p-4">
        <div className="max-w-screen-xl grow rounded-lg bg-white dark:bg-slate-700 px-6 py-8">
          <Header />
          <TaskForm />
          <TasksList />
        </div>
      </div>
    </TasksProvider>
  );
}

export default App;
