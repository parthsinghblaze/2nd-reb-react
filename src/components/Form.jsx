import React, { useContext, useState } from "react";
import { WrapperContext } from "../App";

function Form() {
  // 1 -> state
  // 2 -> input => state value
  // 3 -> handleChange

  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    city,
    setCity,
    setTableData,
    tableData,
  } = useContext(WrapperContext);

  function handleSubmit(e) {
    e.preventDefault();
    const formValue = { firstName, lastName, city };
    setTableData([...tableData, formValue]);

    setFirstName("");
    setLastName("");
    setCity("");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 p-3 shadow my-5">
          <h3 className="text-center">Add Data</h3>
          <form action="">
            <div className="mb-3">
              <input
                type="text"
                placeholder="Enter First Name"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Enter Last Name"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={city}
                placeholder="City"
                className="form-control"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit} className="btn btn-primary">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
