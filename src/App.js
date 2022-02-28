import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderStudent from './HeaderStudent';
import ToDoForm from './form';
import Tasks from './getListOfTasks';


function App() {
  return (
    <div className="App">
      <HeaderStudent />
      <ToDoForm />
    <Tasks />
    </div>
  );
}


export default App;
