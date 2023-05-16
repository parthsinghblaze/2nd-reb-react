import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/apiProduct";

function ViewProduct() {
  const dispatch = useDispatch();

  const { loading, apiProduct } = useSelector((state) => state.apiProduct);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="container">
      <h4>View product</h4>
      <table className="table table-primary">
        <thead>
          <tr>
            <th>Sr no</th>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {apiProduct.map((item, index) => {
            const { _id, name, price, qty, category } = item;

            return (
              <tr>
                <td>{index + 1}</td>
                <td> {name} </td>
                <td> {qty} </td>
                <td> {price} </td>
                <td> {category} </td>
                <td>
                  <button className="btn btn-warning">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ViewProduct;
