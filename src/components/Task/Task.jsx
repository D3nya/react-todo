import React, { memo } from "react";

import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

import { useTasksContext } from "../../contexts/TasksContext";

const Task = memo(({ id, text, completed }) => {
  const { deleteTask, toggleTask } = useTasksContext();

  return (
    <>
      <li className="flex justify-between items-center">
        <MyInput
          type="checkbox"
          id={id}
          onChange={() => toggleTask(id)}
          checked={completed}
          className="form-checkbox cursor-pointer h-5 w-5 group shrink-1"
        />
        <p
          className={
            completed ? "todo-text line-through opacity-50" : "todo-text"
          }
        >
          {text}
        </p>
        <MyButton onClick={() => deleteTask(id)}>Delete</MyButton>
      </li>
      <hr className="my-4 border-t border-gray-300 dark:border-slate-900" />
    </>
  );
});

export default Task;
