// TaskInput.js
import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-outline-primary" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default TaskInput;
