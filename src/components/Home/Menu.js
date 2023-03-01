import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../feature/CartSlice";
const Menu = () => {
  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();

  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>

        <div className="box-container">
          {items.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={item.img} alt="" />
              <h3>{item?.title}</h3>
              <div className="price">${item.price}</div>
              <p className="btn" onClick={() => dispatch(addToCart(item))}>
                add to cart
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
