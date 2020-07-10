import React from 'react';

// Import individual tasks
import Names from './components/Task1/Names';
import Todo from './components/Task2/Todo';
import Generator from './components/Task3/Generator';
import UsersContainer from './components/Task4/Users/UsersContainer'
import ErrorEmitator from './components/Task5/ErrorEmitator/ErrorEmitator'
import Gallery from './components/task6/Gallery'
import Bookmarker from './components/Task7/Bookmarker'
import LoginTemplate from './components/Task8/LoginTemplate'
import BurgerMenu from './components/Task9/BurgerMenu'
import Animals from './components/Task10/Animals'
import TodoList from './components/Task11/TodoList'
import DisplayingMessage from './components/Task12/DisplayingMessage'
import ReportCard from './components/Task13/ReportCard'
import AdminUsersList from './components/Task14/AdminUsersList'
import NotificationMessage from './components/Task15/NotificationMessage'


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
      <LoginTemplate />
      <BurgerMenu />
      <Animals />
      <TodoList />
      <DisplayingMessage />
      <ReportCard />
      <AdminUsersList />
      <NotificationMessage />
      {/* This is task5 component with Error request */}
      {/* <ErrorEmitator />  */}
    </div>
  );
}

export default App;
