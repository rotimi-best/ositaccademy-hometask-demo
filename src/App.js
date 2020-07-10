import React from 'react';

// Import individual tasks
import Names from './components/Task1/Names';
import Todo from './components/Task2/Todo';
import Generator from './components/Task3/Generator';
import UsersContainer from './components/Task4/Users/UsersContainer'
import ErrorEmitator from './components/Task5/ErrorEmitator/ErrorEmitator'
import Gallery from './components/task6/Gallery'
import Bookmarker from './components/Task7/Bookmarker'

function App() {
  return (
    <div className="App">
      {/* Render each home task, all I will do is to uncomment them to check them */}
      <Names />
      <Todo />
      <Generator />
      <UsersContainer />
       <Gallery />
       <Bookmarker />
      {/* This is task5 component with Error request */}
      {/* <ErrorEmitator />  */}
    </div>
  );
}

export default App;
