import { useCart } from "../context/CartContext";
import { useState } from "react";

function Checkout() {
  const { cart, userId } = useCart();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = async () => {
    if (!form.name || !form.address || !form.phone) {
      alert("Please fill all fields");
      return;
    }

    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        items: cart,
        total,
        address: form,
      }),
    });

    if (res.ok) {
      alert("Order placed successfully!");
      window.location.href = "/";
    }
  };

  return (
    <div className="mt-24 p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Cart Summary */}
      <div className="border p-4 mb-6">
        {cart.map((item) => (
          <div key={item.productId.toString()} className="flex justify-between mb-2">
            <span>
              {item.title} * {item.quantity}
            </span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
        <hr className="my-2" />
        <h2 className="font-bold text-lg">Total: ₹{total}</h2>
      </div>

      {/* Address Form */}
      <div className="border p-4">
        <input
          name="name"
          placeholder="Full Name"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <textarea
          name="address"
          placeholder="Delivery Address"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-2 mb-4"
          onChange={handleChange}
        />

        <button
          onClick={placeOrder}
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Place Order (COD)
        </button>
      </div>
    </div>
  );
}

export default Checkout;



