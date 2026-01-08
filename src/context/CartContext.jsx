import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import auth from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [userId, setUserId] = useState(null);

  // Get user ID from Firebase Auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
        setCart([]);
      }
    });

    return () => unsubscribe();
  }, []);

  // Fetch cart from backend when userId is available
  useEffect(() => {
    if (!userId) return;
    axios
      .get(`http://localhost:5000/api/cart/${userId}`)
      .then((res) => setCart(res.data.items || []))
      .catch((err) => console.error(err));
  }, [userId]);

  const addToCart = async (product) => {
    if (!userId) return alert("Please login first");
    try {
      const res = await axios.post("http://localhost:5000/api/cart/add", {
        userId,
        product
      });
      setCart(res.data.items);
    } catch (err) {
      console.error(err);
    }
  };
  
  const removeFromCart = async (productId) => {
    if (!userId) return;
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/cart/remove/${userId}/${productId}`
      );
      setCart(res.data.items);
    } catch (err) {
      console.error(err);
    }
  };

  const updateQuantity = async (productId, action) => {
  if (!userId) return;

  try {
    const res = await fetch("http://localhost:5000/api/cart/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, productId, action }),
    });

    if (!res.ok) {
      throw new Error("Failed to update cart");
    }

    const data = await res.json();
    setCart(data.items || []);
  } catch (err) {
    console.error("Update quantity failed:", err);
  }
};


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, userId }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

