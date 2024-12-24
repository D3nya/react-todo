import React from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';
import {
  list_item,
  btn_close,
  text_checked,
  input,
  task__text,
} from './TaskItem.module.css';

const TaskItem = ({ id, text, completed, setTasks }) => {
  const toggleTask = (id, completed) => {
    setTasks((currentTasks) => {
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
    <li className={list_item} key={id}>
      <MyInput
        type="checkbox"
        className={input}
        id={id}
        onChange={(e) => toggleTask(id, e.target.checked)}
        checked={completed}
      />
      <label className={`${task__text} ${text_checked}`} htmlFor={id}>
        {text}
      </label>
      <MyButton className={btn_close} onClick={() => deleteTask(id)}>
        Delete
      </MyButton>
    </li>
  );
};

export default TaskItem;
