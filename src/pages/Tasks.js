import React, { useState } from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import { Container } from 'react-bootstrap';
import './Tasks.css';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const updateTask = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  return (
    <div className="tasks-container">
      <Container className="tasks-content">
        <h1 className="text-center mb-4">Tasks</h1>
        <TaskInput addTask={addTask} />
        {tasks.length > 0 ? (
          <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
        ) : (
          <p className="text-center mt-3">No tasks added yet</p>
        )}
      </Container>
    </div>
  );
};

export default Tasks;
