import React, { useEffect, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { useParams, Link, useLocation } from "react-router-dom";
import { productList } from "../utlis/productList";

function ProductDetail() {
  // const { id } = useParams();

  // const routeParams = useParams();

  // const { id } = routeParams;

  // const [productDetails, setProductDetails] = useState({});

  const { state } = useLocation();

  console.log("state", state);

  // useEffect(() => {
  //   const findItem = productList.find((item) => item.id === Number(id));
  //   setProductDetails(findItem);
  // }, []);

  return (
    <div className="container py-5">
      <Link to="/products" className="btn btn-secondary">
        <IoArrowBackSharp />
      </Link>
      <h2>Detail {state.id} </h2>
      <hr />
      <div className="card">
        <div className="card-body">
          <h2>{state.name}</h2>
          <p>{state.desp}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
