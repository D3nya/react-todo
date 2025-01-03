import React, { memo } from "react";

import Task from "../Task/Task";

import { useTasksContext } from "../../contexts/TasksContext";

const TasksList = memo(() => {
  const { tasks, setTasks } = useTasksContext();

  return (
    <>
      <h3 className="font-semibold text-5xl mt-4 mb-1 ml-4 text-slate-900 dark:text-white">
        Tasks
      </h3>
      <ul>
        {tasks.length === 0 && (
          <h3 className="font-semibold text-4xl mt-2 mb-1 text-center text-slate-900 dark:text-white">
            No tasks!
          </h3>
        )}
        {tasks.map(({ id, text, completed }) => (
          <Task
            key={id}
            id={id}
            text={text}
            completed={completed}
            setTasks={setTasks}
          />
        ))}
      </ul>
    </>
  );
});

export default TasksList;
