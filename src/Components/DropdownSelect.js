import React from 'react';

function DropdownSelect(props) {

var teachers = ["teacher1", "teacher2"];
var period =["1","2"];
var students =["student1","student2","student3","student4","student5","student6"]

// handleChange = (event) => {
//     this.setState({"studentSelected": event.target.value});
//   }
  return (
    <div className="container bg-light p-5 ">
      <div className="row">
        <h3 className="my-4">Filter Criteria</h3>
          <div className="col-md-4">
            <h5>Select Teacher</h5>

            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              {teachers.map((teacher) => (
                <option value={teacher}>{teacher}</option>
              ))}
            </select>

        </div>

          <div className="col-md-4">
          <h5>Select Period</h5>
          <select className="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
              {period.map((period) => (
                <option value={period}>{period}</option>
              ))}
          </select>
        </div>

        <div className="col-md-4">
          <h5>Select Student</h5>
          <select className="form-select" aria-label="Default select example" onChange={props.updateStudent}>
            <option selected>Open this select menu</option>
              {students.map((student) => (
                <option value={student}>{student}</option>
              ))} 
          </select>
        </div>
      </div>
    </div>
  );
}

export default DropdownSelect;
