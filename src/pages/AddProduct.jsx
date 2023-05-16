import React, { useState } from "react";
import { createProduct } from "../redux/apiProduct";
import { useDispatch } from "react-redux";

function AddProduct() {
  const [name, setName] = useState("");
  const [qty, setQty] = useState(0);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const formValue = { name, qty, category, price };
    dispatch(createProduct(formValue));
  }

  return (
    <div className="container moveUpAnimation">
      <h5>Add Products</h5>
      <div className="row">
        <div className="col-md-6 offset-md-3 p-3 shadow my-5">
          <form action="">
            <div className="mb-3">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label>Qty</label>
              <input
                type="number"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label>Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label>Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="form-control"
              />
            </div>
            <button className="btn btn-success" onClick={handleSubmit}>
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
