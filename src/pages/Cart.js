import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
                    <button className="btn">
                      <i className="fas fa-plus"></i>
                    </button>
                    <strong>{data.quantity}</strong>
                    <button className="btn">
                      <i className="fas fa-plus"></i>
                    </button>
                  </th>
                  <th>
                    <button
                      type="button"
                      className="btn"
                      onClick={() => dispatch(removeItem(data.id))}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </th>

                  <hr className="my-4" />
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <>
            <h1>
              No Data<span> in your Cart</span>
            </h1>
            <div>
              <button className="btn">Continue Shopping</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
