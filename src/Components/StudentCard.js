import React from 'react';

function StudentCard() {
  return (
  <div className="container p-5 bg-light">
    <div className="row card p-4">
      <div className="col">
        <h1>Student Information</h1>

          <div className="row ">

            <div className="col-md-8  border ">
              <div className="p-2">
                <h4>Student Name: </h4>
                <h4>Student ID: </h4>
              </div>

              <div className="m-2 p-2">
                <h4>Bathroom Visits: </h4>
                <h4>Guidance Visits: </h4>
                <h4>Main Office Visits: </h4>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3 d-flex justify-content-center">

              <div className="row">
                {/* <div class="btn-group-vertical " role="group"> */}
                  <button type="button" className="btn btn-outline-danger my-2">+ Bathroom Visits</button>
                  <button type="button" className="btn btn-outline-warning">+ Guidance Visits</button>
                  <button type="button" className="btn btn-outline-success my-2">+ Main Office Visit</button>
                {/* </div> */}
              </div>
            </div>

          </div>
      </div>
    </div>
</div>
  );
}

export default StudentCard;
