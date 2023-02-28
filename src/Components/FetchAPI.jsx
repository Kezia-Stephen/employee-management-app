import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

const FetchAPI = () => {
  const [data, setData] = useState([]);
  // For loaders
  const [fetching, setFetching] = useState(false);

  // For cart
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  const apiGet = () => {
    setFetching(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
        setFetching(false);
      });
  };

  const prodArray = data.products;
  // console.log("Product Array Title", prodArray[1].description.substring(0,50));

  // const handleClick = (cartItem) => {
  //   cart.push(cartItem);
  //   setCart(cart);
  //   setCount(count + 1);
  //   console.log(cart);
  //   console.log(count);
  // };

  const handleClick = (cartItem) => {  
    setCart([...cart, cartItem]);
    setCount(count + 1);
    
    console.log("Cart Items",cartItem);
    console.log(count);
  };
  console.log("Cart",cart);

  useEffect(() => {
    apiGet();
    // 
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a href="#" className="navbar-brand">
          Shoppy
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="badge badge-pill badge-secondary">{cart.length}</span>
                {/* <span className="badge badge-pill badge-secondary">{count}</span> */}
              </a>
            </li>
          </ul>
        </div>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
     
      {fetching ? <Spinner/>:<div className="d-flex flex-wrap justify-content-center">
          {prodArray?.map((item) => (
            <div
              key={item?.id}
              className="card text-center"
              style={{
                width: "18rem",
                padding: "0.2rem",
                marginBottom: "1rem",
              }}
            >
              <img
                className="card-img-top"
                src={item?.thumbnail}
                alt="Card image cap"
                style={{ width: "275px", height: "178px" }}
              />
              <div className="card-body">
                <h5 className="card-title text-truncate">{item?.title}</h5>
                <p className="card-text">${item?.price}</p>
                <p className="card-text">{item.description.substring(0, 52)}</p>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={()=>handleClick(item)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>}
    </div>
  );
};

export default FetchAPI;
