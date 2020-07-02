import React from 'react';

// Import individual tasks
import Names from './components/Task1/Names';
import Todo from './components/Task2/Todo';
import Generator from './components/Task3/Generator';
import UsersContainer from './components/Task4/Users/UsersContainer'

function App() {
  return (
    <div className="App">
      {/* Render each home task, all I will do is to uncomment them to check them */}
      <Names />
      <Todo />
      <Generator />
      <UsersContainer />
    </div>
  );
}

export default App;
