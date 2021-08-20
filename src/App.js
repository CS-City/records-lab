import React from 'react';
import Navbar from './Components/Navbar.js'
import DropdownSelect from './Components/DropdownSelect.js'
import StudentCard from './Components/StudentCard.js';
import './App.css';


function App() {
  return (
      <div className="container m-4">
          <Navbar />
          <DropdownSelect />
          <StudentCard />
          
      </div>
  );
}

export default App;
