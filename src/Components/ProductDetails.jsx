import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext.jsx";

function ProductDetails() {
  const { id } = useParams(); // get product id from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const navigate = useNavigate(); 

  useEffect(() => {
  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/product/${id}`
      );
      setProduct(res.data); // backend already returns one product
    } catch (err) {
      console.error("Error fetching product", err);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  fetchProduct();
}, [id]);


  if (loading) return <p className="mt-24 text-center">Loading...</p>;
  if (!product) return <p className="mt-24 text-center">Product not found</p>;

  return (
    <div className="mt-24 p-6 flex justify-center">
        
      <div className="max-w-3xl bg-white shadow-lg p-6 rounded-lg grid grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-contain rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl font-semibold mb-4">₹{product.price}</p>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            tincidunt, lorem sit amet tincidunt gravida, ex nisi bibendum
            metus, non rhoncus metus nulla a libero.
          </p>
          <button
            onClick={() => addToCart(product)}
            className="bg-green-500 text-white px-6 py-2 rounded font-bold"
          >
            Add to Cart
          </button>
          <button
          onClick={() => navigate(-1)}
          className="bg-green-500 text-white px-6 py-2 rounded font-bold ml-3"
        >
          Back
        </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
