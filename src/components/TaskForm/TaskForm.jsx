import React from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';
import { form, input, header, button, text_bold } from './TaskForm.module.css';

const TaskForm = ({ task, setTask, setTasks }) => {
  const pushTask = (e) => {
    e.preventDefault();

    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Date.now(), text: task, completed: false },
    ]);
  };

  return (
    <form className={form} onSubmit={pushTask}>
      <label className={`${header} ${text_bold}`} htmlFor="task">
        New task
      </label>
      <MyInput
        type="text"
        id="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className={input}
      />
      <MyButton className={button}>Add task</MyButton>
    </form>
  );
};

export default TaskForm;
