import React, { useState } from 'react';

const Counter = () => {
 
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  
  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React To-Do List</h1>

      {/* Input and Add Button */}
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={handleInputChange}
          style={{
            padding: '10px',
            fontSize: '16px',
            marginRight: '10px',
            width: '200px',
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: '10px 20px',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <ul style={{ marginTop: '20px', listStyleType: 'none', padding: '0' }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <span
              style={{
                marginRight: '20px',
                fontSize: '18px',
                color: '#333',
              }}
            >
              {task}
            </span>
            <button
              onClick={() => removeTask(index)}
              style={{
                padding: '5px 10px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {/* Empty State */}
      {tasks.length === 0 && <p style={{ marginTop: '20px' }}>No tasks yet. Add some!</p>}
    </div>
  );
};

export default Counter;
