import React from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App body */}
      <div className="app__body">
        <SideBar />
         {/* feed */}
         {/* widgets */}
      </div>
         
    </div>
  );
}

export default App;
