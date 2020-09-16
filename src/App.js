import React from 'react';
import './App.css';
import Navbar from './navbar/navbar';
import './navbar/navbar.css'

function App() {
  var NavbarItems = ["Home", "SERVICES", "PORTFOLIO", "TEAMS", "JOBS", "PODCAST"];
  return (
    <div className="App">
      <Navbar color="pink" NavbarItems={NavbarItems} />
    </div>
  );
}

export default App;
