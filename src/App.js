import React from 'react';
import {Component} from 'react'
import Navbar from './Components/Navbar.js'
import DropdownSelect from './Components/DropdownSelect.js'
import StudentCard from './Components/StudentCard.js';
import data from './StudentData.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: "",
      period: "",
      teacher: "",
      bathroomVisits: null,
      guidanceVisits: null,
      mainOfficeVisits: null
    }
  }

  updateStudent=(event)=>{
    let newStudent=event.target.value
    this.setState({studentName:newStudent})

    for(let i=0; i<data.length; i++){
      if(data[i].studentName===newStudent){
        this.setState({bathroomVisits:data[i].bathroomVisits})
        this.setState({guidanceVisits:data[i].guidanceVisits})
        this.setState({mainOfficeVisits:data[i].mainOfficeVisits})
      }
    }
  }


render () {
  return (
      <div className="container m-4">
          <Navbar />
          <DropdownSelect updateStudent={this.updateStudent}/>
          <StudentCard studentName={this.state.studentName} bathroomVisits={this.state.bathroomVisits} guidanceVisits={this.state.guidanceVisits} mainOfficeVisits={this.state.mainOfficeVisits}/>
          
      </div>
  );
}
}

export default App;
