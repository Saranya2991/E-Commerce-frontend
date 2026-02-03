import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useEffect } from "react";

function AddCart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="mt-24 h-full p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item) => (
        
        <div
          key={item.productId?.toString() || item._id}
          className="flex justify-between items-center border p-4 mb-3"
        >
          <div>
            <h2 className="font-bold">{item.title}</h2>
            <p>
              ₹{item.price} * {item.quantity}
            </p>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <button
              onClick={() => updateQuantity(item.productId.toString(), "decrease")}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              -
            </button>

            <span className="font-bold">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.productId.toString(), "increase")}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item.productId)}
            className="bg-red-500 text-white px-4 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}

      <h2 className="text-xl font-bold mt-4">Total: ₹{total}</h2>
      {cart.length > 0 && (
      <Link to="/checkout">
        <button className="bg-green-600 text-white px-6 py-2 rounded mt-4">
          Proceed to Checkout
        </button>
      </Link>
      )}
    </div>
  );
}

export default AddCart;
