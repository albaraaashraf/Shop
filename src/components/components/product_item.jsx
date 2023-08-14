import React, { useState } from "react";

import { Link } from "react-router-dom";

function ProductItem(probs) {
  // params for routing

  //@@@@@@@@@@@@@@@@@@@@@@@@@@@
  function rate() {
    let stars = [];

    for (let i = 0; i < Math.trunc(probs.rating); i++) {
      // trunc to convert to integer
      stars.push(<i className="fa-solid fa-star" key={i + 1}></i>);
    }
    return <div>{stars}</div>;
  }

  let buyBtn = () => {
    console.log("item added to cart");
  };

  let [style, setStyle] = useState(() => {
    return { backgroundColor: "#EEE", height: "5rem", overflowY: "hidden" };
  });

  let [btn_state, setBtn_state] = useState(() => {
    return true;
  });
  let [btn_content, setBtn_content] = useState(() => {
    return "more";
  });

  let styling = style;
  let state = btn_state;
  let content = btn_content;

  let showMore = function () {
    if (state) {
      setBtn_state(() => {
        return false;
      });
      setBtn_content(() => {
        return "less";
      });
      setStyle(() => {
        return { ...style, height: "15rem", overflowY: "scroll" };
      });
    } else {
      setBtn_state(() => {
        return true;
      });
      setBtn_content(() => {
        return "more";
      });
      setStyle(() => {
        return { ...style, height: "5rem", overflowY: "hidden" };
      });
    }
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
        <p className="card-text p-2 product-decs-scroll" style={styling}>
          <b>description </b> : <br /> {probs.description}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item p-2">
          <button className="btn btn-success" onClick={showMore}>
            {content}
          </button>
        </li>
        <li className="list-group-item p-2">{probs.price} $</li>
        <li className="list-group-item p-2">
          {" "}
          rate : {rate()}
          {}
        </li>
      </ul>
      <div className="card-body">
        {probs.details && (
          <Link className="btn btn-primary mx-1" to={`/products/${probs.id}`}>
            Details
          </Link>
        )}
        <button className="btn btn-secondary" onClick={buyBtn}>
          Buy
        </button>
      </div>
    </>
  );
}
export default ProductItem;
