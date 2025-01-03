import React, { useState } from "react";

import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

import { useTasksContext } from "../../contexts/TasksContext";

const TaskForm = () => {
  const [input, setInput] = useState("");
  const { addTask } = useTasksContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const status = addTask(input);

    if (status) {
      setInput("");
    }
  };

  return (
    <form className="flex flex-col items-center mt-10" onSubmit={handleSubmit}>
      <label
        className="font-semibold text-4xl mb-2 text-slate-900 dark:text-white"
        htmlFor="task"
      >
        New task
      </label>
      <MyInput
        type="text"
        id="task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="mb-2 w-3/4 dark:bg-slate-800 dark:border-gray-700 text-slate-900 dark:text-white dark:placeholder-gray-400"
      />
      <MyButton className="w-1/4">Add task</MyButton>
    </form>
  );
};

export default TaskForm;
