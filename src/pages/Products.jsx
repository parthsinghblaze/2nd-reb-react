import React, { useState } from "react";
import { Link } from "react-router-dom";
import { productList } from "../utlis/productList";

function Products() {
  const [list, setList] = useState(productList);

  console.log("list", list);
  return (
    <div className="container py-5">
      <h1>Products</h1>
      {list.map((item) => {
        const { id, name, desp } = item;
        return (
          <div className="card mb-3" key={id}>
            <div className="card-body">
              <h2>{name}</h2>
              <Link to={`/product/${id}`}> View Details </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
