import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState("");
  const [list, setList] = useState(["Học lập trình .NET", "Học lập trình Java"]);

  const addTask = () => {
    if (task.trim()) {
      setList([...list, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div style={{ background: '#22272e', padding: '20px', color: 'white' }}>
      <input 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Please input a Task" 
      />
      <button onClick={addTask} style={{ background: 'red', color: 'white' }}>Add Todo</button>
      
      <div style={{ background: 'white', color: 'black', marginTop: '20px', padding: '10px' }}>
        <h3>Todo List</h3>
        {list.map((item, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span>{item}</span>
            <button onClick={() => deleteTask(index)} style={{ background: 'red', color: 'white' }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TodoList;