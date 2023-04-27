import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

function CocktailDetail() {
  const params = useParams();

  const [cocktailDetail, setCocktailDetail] = useState({});
  const [loading, setLoading] = useState(false);

  const { state } = useLocation();

  console.log("location data", state);

  useEffect(() => {
    setCocktailDetail(state);
  }, [state]);

  // useEffect(() => {
  //   fetch(
  //     `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`
  //   )
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setCocktailDetail(data.drinks[0]);
  //       setLoading(false);
  //     })
  //     .catch((e) => console.log("e", e));
  // }, []);

  if (loading) {
    return (
      <div className="d-flex w-100 py-5 justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // const navigate = useNavigate();

  return (
    <div className="container py-5">
      {/* <button className="btn btn-secondary" onClick={() => navigate("/")}>
        Back
      </button> */}
      <Link className="btn btn-secondary" to="/cocktails">
        <IoArrowBackSharp />
      </Link>
      <div className="row py-5">
        <div className="col-md-4">
          <img src={cocktailDetail.strDrinkThumb} width="100%" alt="" />
        </div>
        <div className="col-md-8">
          <h2>Drink name: {cocktailDetail.strDrink}</h2>
          <p> Category : {cocktailDetail.strCategory} </p>
          <p> Details: {cocktailDetail.strInstructions} </p>
        </div>
      </div>
    </div>
  );
}

export default CocktailDetail;
