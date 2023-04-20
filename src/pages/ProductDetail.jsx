import React, { useEffect, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { useParams, Link } from "react-router-dom";
import { productList } from "../utlis/productList";

function ProductDetail() {
  const { id } = useParams();

  // const routeParams = useParams();

  // const { id } = routeParams;

  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    const findItem = productList.find((item) => item.id === Number(id));
    setProductDetails(findItem);
  }, []);

  console.log("product details", productDetails);

  return (
    <div className="container py-5">
      <Link to="/products" className="btn btn-secondary">
        <IoArrowBackSharp />
      </Link>
      <h2>Detail {id} </h2>
      <hr />
      <div className="card">
        <div className="card-body">
          <h2>{productDetails.name}</h2>
          <p>{productDetails.desp}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
