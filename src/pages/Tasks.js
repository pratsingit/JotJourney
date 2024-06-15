import React, { useState } from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import { Container } from 'react-bootstrap';

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

  const updateTask = (index) => {
    const updatedTask = prompt('Edit the task:', tasks[index]);
    if (updatedTask && updatedTask.trim()) {
      const updatedTasks = [...tasks];
      updatedTasks[index] = updatedTask;
      setTasks(updatedTasks);
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Tasks</h1>
      <TaskInput addTask={addTask} />
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
      ) : (
        <p className="text-center mt-3">No tasks added yet</p>
      )}
    </Container>
  );
};

export default Tasks;