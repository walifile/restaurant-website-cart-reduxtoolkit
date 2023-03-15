import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../feature/CartSlice";
const Cart = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  return (
    <>
      <div className="cart_table">
        <h1 className="heading">
          Your <span>Cart</span>
          <div className="shop_wrapper">
            <Link to="/" className="btn">
              Continue Shopping
            </Link>
          </div>
        </h1>
        {cart.length > 0 ? (
          <table className="cart_table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((data) => (
                <tr>
                  <th>
                    <img src={data.img} className="w-100" alt="Blue" />
                  </th>
                  <th>
                    <strong>{data.title}</strong>
                  </th>
                  <th>
                    <strong>{data.price}</strong>
                  </th>
                  <th>
                    <i
                      className="fas fa-minus"
                      onClick={() => dispatch(decreaseItemQuantity(data.id))}
                    ></i>
                    <strong>{data.quantity}</strong>
                    <i
                      className="fas fa-plus"
                      onClick={() => dispatch(increaseItemQuantity(data.id))}
                    ></i>
                  </th>
                  <th onClick={() => dispatch(removeItem(data.id))}>
                    <i className="fas fa-trash"></i>
                  </th>

                  <hr className="my-4" />
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <>
            <h1 className="heading">
              No Data<span> in your Cart</span>
            </h1>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
