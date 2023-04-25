import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { productList } from "../utlis/productList";

function Products() {
  const [list, setList] = useState(productList);
  const [filterList, setFilterList] = useState(productList);
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const searchProducts = filterList.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchText) ||
        item.desp.toLowerCase().includes(searchText)
      );
    });

    setList(searchProducts);
  }, [searchText]);

  return (
    <div className="container py-5">
      <h1>Products</h1>
      <input
        type="text"
        className="form-control mb-4"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {list.map((item) => {
        const { id, name, desp } = item;
        return (
          <div className="card mb-3" key={id}>
            <div className="card-body">
              <h2>{name}</h2>
              <button
                onClick={() => navigate(`/product/${id}`, { state: item })}
              >
                View Details
              </button>
              {/* <Link to={`/product/${id}`}> View Details </Link> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
