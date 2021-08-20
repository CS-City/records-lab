import React from 'react';

function DropdownSelect() {
  return (
    <div className="container bg-light p-5 ">
      <div className="row">
        <h3 className="my-4">Filter Criteria</h3>
          <div className="col-md-4">
            <h5>Select Teacher</h5>
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
        </div>

          <div className="col-md-4">
          <h5>Select Period</h5>
          <select className="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="col-md-4">
          <h5>Select Student</h5>
          <select className="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default DropdownSelect;
