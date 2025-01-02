import React from "react";

import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ tasks, setTasks }) => {
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
          <TaskItem
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
};

export default TaskList;
