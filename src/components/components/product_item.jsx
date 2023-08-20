// eslint-disable-next-line no-unused-vars
import React from "react";

import { Link } from "react-router-dom";
import { useUser } from "../../Context/userContext";

function ProductItem(probs) {
  // params for routing

  const { signed } = useUser();
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@

  let buyBtn = () => {
    console.log("item added to cart");
  };

  return (
    <>
      <div className="card" />
      <img
        src={probs.img}
        className="card-img-top img-fluid w-50"
        alt={probs.title}
      />
      <div className="card-body">
        <h5 className="card-title p-2">{probs.title}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item p-2">{probs.price} $</li>
        <li className="list-group-item p-2">
          {" "}
          rate : {probs.rating}
          {}
        </li>
      </ul>
      <div className="card-body">
        {probs.details && (
          <Link className="btn btn-primary mx-1" to={`/products/${probs.id}`}>
            Details
          </Link>
        )}
        {signed && (
          <button className="btn btn-secondary" onClick={buyBtn}>
            Add to Cart
          </button>
        )}
      </div>
    </>
  );
}
export default ProductItem;
