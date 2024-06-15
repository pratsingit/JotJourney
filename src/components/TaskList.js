// TaskList.js
import React from 'react';

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          <span>{task}</span>
          <div className="btn-group" role="group" aria-label="Task Actions">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={() => updateTask(index)}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-danger"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
