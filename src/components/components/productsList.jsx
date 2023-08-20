// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Category from "./category";
import ProductItem from "./product_item";

function ProductsList() {
  let [products, setProducts] = useState([]);
  let [filterdProducts, setfilterdProducts] = useState([]);
  let [categ, setCateg] = useState([]);

  const api_URL = "https://fakestoreapi.com/products";
  const categ_URL = "https://fakestoreapi.com/products/categories";

  let getAllProuct = () => {
    fetch(api_URL)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setfilterdProducts(json);
      });
  };

  let getCategories = () => {
    fetch(categ_URL)
      .then((res) => res.json())
      .then((data) => {
        setCateg(data);
      });
  };

  useEffect(() => {
    getAllProuct();
    getCategories();
  }, []);

  function filterProducts(categ) {
    if (categ === "All") {
      setfilterdProducts(products);
    } else {
      let productsArr = products.filter((product) => {
        return product.category === categ;
      });
      setfilterdProducts(productsArr);
    }
  }

  return (
    <>
      <h1 className="m-3 mx-xxl-5">Our Products</h1>

      {/* this is the container that hold both products and the filtering */}
      <div className="container-xxl d-flex flex-row h-100">
        {/* this is the filtring search */}

        <div className="container-fluid d-flex justify-content-center align-items-start h-25 w-25 border-end border-1 border-dark filtring-w ">
          <div
            className="btn-group-vertical"
            role="group"
            aria-label="Vertical button group"
          >
            <Category category={"All"} filter={() => filterProducts("All")} />
            {categ.map((cat, i) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <Category
                  category={cat}
                  filter={() => filterProducts(cat)}
                  key={i}
                />
              );
            })}
          </div>
        </div>

        {/* these are the products */}
        <div className="container-xl">
          <div className="row m-2 p-2">
            {filterdProducts.map((product) => {
              return (
                <div className="col-md-4 p-3" key={product.id}>
                  <ProductItem
                    key={product.id}
                    id={product.id}
                    img={product.image}
                    title={product.title}
                    price={product.price}
                    rating={product.rating.rate}
                    details={true}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductsList;
