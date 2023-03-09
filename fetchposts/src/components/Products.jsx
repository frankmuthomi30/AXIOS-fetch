import axios from "axios";
import React, { useState, useEffect } from "react";

function Products() {
  let [products, setProducts] = useState();
  useEffect(() => {
    let getProducts = () => {
      axios
        .get("https://dummyjson.com/products")
        .then((response) => {
            console.log(response.data.products)
          setProducts(response.data.products);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getProducts()
  }, []);
  return (
    <div>
      {products && products.length > 0 ? (
        products.map((p) => {
          return <div>
            <img src={`${p.thumbnail}`} alt={p.title} />
            <h1 key={p.id}>{p.title}</h1>
            <p>{p.description}</p>
            <span>{p.rating}</span>
            <span>{p.stock}</span>
            
          </div>
           ;
        })
      ) : (
        <h1>No data available</h1>
      )}
    </div>
  );
}

export default Products;
