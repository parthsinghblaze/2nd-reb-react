import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getAllProducts } from "../redux/apiProduct";
import { useNavigate } from "react-router-dom";

function ViewProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, apiProduct, error } = useSelector(
    (state) => state.apiProduct
  );

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  if (error) {
    return <h1>Some thing went wrong!</h1>;
  }

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
                  <button
                    className="btn btn-warning"
                    onClick={() =>
                      navigate(`/edit-product/${_id}`, { state: item })
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteProduct(_id))}
                  >
                    Delete
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

export default ViewProduct;
