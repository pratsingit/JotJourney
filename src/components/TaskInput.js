import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask({ name: taskName, description: taskDescription }); // Pass an object with name and description
      setTaskName('');
      setTaskDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a task..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Task description..."
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <button className="btn btn-outline-primary" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default TaskInput;