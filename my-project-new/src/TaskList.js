import React from 'react';
import TaskItem from './TaskItem';
const TaskList = ({ tasks, deleteTask, markCompleted }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span
            className={task.completed ? 'completed' : ''}
            onClick={() => markCompleted(task.id)}
          >
            {task.text}
          </span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
