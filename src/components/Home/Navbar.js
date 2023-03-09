import React, { useRef } from "react";
import Logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../feature/CartSlice";
// import { cart } from "../../Data";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navbarRef = useRef();
  const searchRef = useRef();
  const cartRef = useRef();
  const { cart } = useSelector((state) => state.allCart);
  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };
  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={Logo} alt="" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#products">products</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          <a href="#blogs">blogs</a>
          <span onClick={() => navigate("/cart")}>cart</span>
        </nav>
        <div className="icons">
          <div
            className="fas fa-search"
            id="search-btn"
            onClick={searchHandler}
          ></div>
          <div
            className="fas fa-shopping-cart"
            id="cart-btn"
            onClick={cartHandler}
          ></div>
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ></div>
        </div>
        <div className="search-form" ref={searchRef}>
          <input type="search" id="search-box" placeholder="search here..." />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>
        <div className="cart-items-container" ref={cartRef}>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <>
                <div className="cart-item" key={index * Math.random()}>
                  <span
                    className="fas fa-times"
                    onClick={() => dispatch(removeItem(item.id))}
                  ></span>
                  <img src={item.img} alt="" />
                  <div className="content">
                    <h3>{item.title}</h3>
                    <div className="price">${item.price}/-</div>
                  </div>
                </div>
                <a href="#" className="btn">
                  checkout now
                </a>
              </>
            ))
          ) : (
            <div className="flex-center">
              <p className="heading">No Data</p>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
