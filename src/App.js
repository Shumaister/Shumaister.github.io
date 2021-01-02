import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import logo from './profilePic.png';
// import './App.css';

import Appbar from './components/Appbar'
import MainRoute from './components/MainRoute'

// const home = <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//            Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://www.linkedin.com/in/gabriel-maiori-646801170/"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       inkedin!
//     </a>
//   </header>
// </div>;


function App() {
  return (
    <Router>
       <div style={{ 'display': 'flex', 'height': '100vh' }}>

      <h1> ALGO DIBUJOOO</h1>
        <Appbar></Appbar>
        <MainRoute></MainRoute>
      </div>
    </Router>
  )
}

export default App;
