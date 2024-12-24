import React from 'react';
import { todo_app } from './App.module.css';
import TaskList from '../TaskList/TaskList';
import TaskForm from '../TaskForm/TaskForm';
import Header from '../Header/Header';

function App() {
  const [task, setTask] = React.useState('');
  const [tasks, setTasks] = React.useState(() => {
    const localTasks = localStorage.getItem('tasks');

    if (localTasks == null || localTasks == '[]')
      return [
        {
          id: Date.now(),
          text: 'It is simple To Do, delete this and start working 😊',
          completed: false,
        },
      ];
    else return JSON.parse(localTasks);
  });

  React.useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className={todo_app}>
      <Header />
      <TaskForm task={task} setTask={setTask} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
