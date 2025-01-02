import React, { useState } from "react";

import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const TaskItem = ({ id, text, completed, setTasks }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleTask = (id, completed) => {
    setTasks((currentTasks) => {
      setIsChecked(!isChecked);

      return currentTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed };
        } else return task;
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <>
      <li className="flex justify-between items-center" key={id}>
        <MyInput
          type="checkbox"
          id={id}
          onChange={(e) => toggleTask(id, e.target.checked)}
          checked={completed}
          className="form-checkbox cursor-pointer h-5 w-5 group shrink-1"
        />
        <p
          className={
            isChecked ? "todo-text line-through opacity-50" : "todo-text"
          }
        >
          {text}
        </p>
        <MyButton onClick={() => deleteTask(id)}>Delete</MyButton>
      </li>
      <hr className="my-4 border-t border-gray-300 dark:border-slate-900" />
    </>
  );
};

export default TaskItem;
