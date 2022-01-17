import React, { useState, useEffect } from "react";
import CardComposition from "./CardComposition";
import "./CardProduct.css";
import SelectFilter from "./SelectFilter";
import ShopCart from "./ShopCart";
import useLocalStorage from "../hooks/useLocalStorage";
import Swal from 'sweetalert2';

const CardProduct = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [categorySelected, setCategorySelected] = useState("all");
  const [db, setDb] = useState([]);
  const [numCart, setNumCart] = useLocalStorage("numCart", 0);
  const [elementCart, setElementCart] = useLocalStorage("elementCart", []);

  const url = "http://localhost:3000/";
  const categoriesUrl = "categories";
  const productsUrl = "products";

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`${url}${productsUrl}`)
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setDb(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    return () => {
      abortController.abort();
    };
  }, []);

  const sumHandleCart = (product) => {
    setNumCart(numCart + 1);
    console.log(elementCart);
    setElementCart([...elementCart, product]);
    console.log(elementCart);
    Swal.fire({
      title: "Producto agregado al carrito!",
      text: `Se agregó ${product.name}`,
      icon: "success",      
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
      position: 'top-end',
      toast: true,
    });
  };
  
  const restHandleCart = (product) => {
    console.log(elementCart);
    console.log(product);
    console.log(elementCart.includes(product));
    if (elementCart.includes(product)) {
      numCart > 0 && setNumCart(numCart - 1);
      let index = elementCart.indexOf(product);
      console.log(index);
      elementCart.splice(index, 1);
      setElementCart(elementCart);
      Swal.fire({
        title: "Producto eliminado del carrito!",
        text: `Se eliminó ${product.name}`,
        icon: "success",      
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
        position: 'top-end',
        toast: true,
      });
    } else {
      Swal.fire({
        title: "Ooops!",
        text: `No tienes ese producto en tu carrito`,
        icon: "error",      
        confirmButtonColor: "#ff0000",
        confirmButtonText: "OK",
        position: 'top-end',
        toast: true,
      });
    }
  };
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <main>
        <ShopCart numCart={numCart} />
        <h2>Página de productos</h2>
        <SelectFilter
          url={`${url}${categoriesUrl}`}
          handleChange={(e) => {
            setCategorySelected(e.target.value);
          }}
        />

        <div className="card">
          <CardComposition
            db={db}
            categorySelected={categorySelected}
            sumHandleCart={sumHandleCart}
            restHandleCart={restHandleCart}
          />
        </div>
      </main>
    );
  }
};

export default CardProduct;
