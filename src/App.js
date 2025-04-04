import React from 'react';
import "./app.css";
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
      <Sidebar/>
      <div className="main-content">
      <Navbar/>
      </div>
      </div>
    </div>
  );
}
export default App;
