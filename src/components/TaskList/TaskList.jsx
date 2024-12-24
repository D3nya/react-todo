import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { header__center, header } from './TaskList.module.css';

const TaskList = ({ tasks, setTasks }) => {
  return (
    <>
      <h3 className={header}>Tasks</h3>
      <ul>
        {tasks.length === 0 && (
          <h3 className={`${header} ${header__center}`}>No tasks!</h3>
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
