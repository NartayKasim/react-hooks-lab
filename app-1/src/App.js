import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import List from './components/List';
import './App.css';

function App() {

  const [taskList, setTaskList] = useState([]);

  const submit = item => {
    const updatedTaskList = [...taskList, item]
    setTaskList(updatedTaskList)
  }

  return (
    <div className="App">
      <AddTodo submit={submit} />
      <List taskList={taskList} />
    </div>
  );
}

export default App;
