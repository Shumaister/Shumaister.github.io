import React from 'react';
import { HashRouter as Router } from 'react-router-dom'
import MenuAppbar from './components/MenuAppbar'
import MainRoute from './components/MainRoute'
import Footer from './components/Footer'


// https://shumaister.github.io/#/
// para correr el deploy --- npm run deploy

function App() { 
  return (
    <Router>
      <MenuAppbar></MenuAppbar>
      <MainRoute></MainRoute>
      <Footer></Footer>
    </Router>
  )
}

export default App;
