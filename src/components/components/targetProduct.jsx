import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "./product_item";

function TargetProduct() {
  const params = useParams();

  const [product, setProduct] = useState({});
  const [rate, setRate] = useState(0);
  const product_Url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(`${product_Url}/${params.productID}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setRate(data.rating.rate);
      });
  }, []);

  return (
    <>
      <div className="container-fluid  bg-danger">
        <div className="row m-2 p-2 justify-content-center">
          <div className="col-md-4 p-3" key={product.id}>
            <ProductItem
              img={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              rating={rate}
              details={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TargetProduct;
