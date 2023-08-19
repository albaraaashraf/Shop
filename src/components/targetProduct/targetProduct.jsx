// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./targetProduct.css";

function TargetProduct() {
  const params = useParams();

  const [product, setProduct] = useState({});
  // const [rate, setRate] = useState(0);
  const product_Url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(`${product_Url}/${params.productID}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        // setRate(data.rating.rate);
      });
  }, [params.productID]);

  return (
    <>
      <div className="container-fluid ">
        <div className="row m-2 p-2 justify-content-start">
          <div className="product-fullPage">
            <div className="img-container">
              <img
                src={product.image}
                className=" img-fluid "
                alt={product.title}
              />
            </div>
            <div className="data">
              <div>
                <span>Product name:</span>
                <span>{product && product.title}</span>
              </div>
              <div>
                <span>description:</span>
                <span>{product && product.description}</span>
              </div>
              <div>
                <span>Price:</span>
                <span>{product && product.price} $</span>
              </div>
              <div>
                <span>Rate:</span>
                <span>{product.rating && product.rating.rate}</span>
              </div>
              <div>
                <span>Category:</span>
                <span>{product && product.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TargetProduct;
