import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cocktails() {
  const [cocktailList, setCocktailList] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
      .then((resp) => resp.json())
      .then((data) => {
        setCocktailList(data.drinks);
        setIsLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container py-5">
        <h2>Cocktail List</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card" aria-hidden="true">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6" />
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7" />
                  <span className="placeholder col-4" />
                  <span className="placeholder col-4" />
                  <span className="placeholder col-6" />
                  <span className="placeholder col-8" />
                </p>
                <a className="btn btn-primary disabled placeholder col-6" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" aria-hidden="true">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6" />
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7" />
                  <span className="placeholder col-4" />
                  <span className="placeholder col-4" />
                  <span className="placeholder col-6" />
                  <span className="placeholder col-8" />
                </p>
                <a className="btn btn-primary disabled placeholder col-6" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" aria-hidden="true">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6" />
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7" />
                  <span className="placeholder col-4" />
                  <span className="placeholder col-4" />
                  <span className="placeholder col-6" />
                  <span className="placeholder col-8" />
                </p>
                <a className="btn btn-primary disabled placeholder col-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2>Cocktail List</h2>
      <hr />
      {/* {loading && <h1>Loading....</h1>} */}
      <div className="row">
        {cocktailList.map((item) => {
          const {
            idDrink,
            strDrinkThumb,
            strDrink,
            strCategory,
            strInstructions,
          } = item;

          return (
            <div className="col-md-4 mb-3">
              <div className="card">
                <img src={strDrinkThumb} alt="" />
                <div className="card-body">
                  <h5>{strDrink}</h5>
                  <span className="text-secondary">{strCategory}</span>
                  <p className="text-truncate">{strInstructions}</p>
                  <Link
                    to={`/cocktails/${idDrink}`}
                    className="btn btn-secondary"
                  >
                    More Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cocktails;