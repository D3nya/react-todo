import React from "react";

import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const TaskForm = ({ task, setTask, setTasks }) => {
  const pushTask = (e) => {
    e.preventDefault();

    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Date.now(), text: task, completed: false },
    ]);
  };

  return (
    <form className="flex flex-col items-center mt-10" onSubmit={pushTask}>
      <label
        className="font-semibold text-4xl mb-2 text-slate-900 dark:text-white"
        htmlFor="task"
      >
        New task
      </label>
      <MyInput
        type="text"
        id="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="mb-2 w-3/4 dark:bg-slate-800 dark:border-gray-700 text-slate-900 dark:text-white dark:placeholder-gray-400"
      />
      <MyButton className="w-1/4">Add task</MyButton>
    </form>
  );
};

export default TaskForm;
