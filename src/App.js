// App.js
import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const updateTask = (index) => {
    const updatedTask = prompt('Edit the task:', tasks[index]);
    if (updatedTask && updatedTask.trim()) {
      const updatedTasks = [...tasks];
      updatedTasks[index] = updatedTask;
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Itinerary Planner</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <TaskInput addTask={addTask} />
          {tasks.length > 0 ? (
            <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
          ) : (
            <p className="text-center mt-3">No tasks added yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
