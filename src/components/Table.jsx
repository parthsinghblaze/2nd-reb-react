import React, { useContext } from "react";
import { WrapperContext } from "../App";

function Table() {
  const { tableData, deleteData, addToEditStage } = useContext(WrapperContext);

  return (
    <div className="container">
      <table className="table table-primary">
        <thead>
          <tr>
            <th>Sr no</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => {
            const { firstName, lastName, city, id } = item;

            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td> {firstName} </td>
                <td> {lastName} </td>
                <td> {city} </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteData(id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => addToEditStage(item)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
