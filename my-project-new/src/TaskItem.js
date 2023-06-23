import React from 'react';

const TaskItem = ({ task, onDelete, onComplete }) => {
  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleComplete = () => {
    onComplete(task.id);
  };

  return (
    <div className="task-item">
      <p>{task.title}</p>
      <button onClick={handleComplete}>Complete</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;

