import { useCart } from "../../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

function Productcard({image,title,price,product}){

    const { addToCart } = useCart();
    const navigate = useNavigate();
    return(
        <div className="border border-green-300 shadow-lg text-center p-4 mt-8 rounded">
        <img src={image} className="w-full h-60 object-contain rounded-2xl"/>
        <h1 className="font-bold text-xl mt-1">{title}</h1>
        <p className="font-semibold text-lg mt-1">₹{price}</p>
        <button  onClick={() => addToCart(product)} className="text-white bg-green-500 rounded p-3 font-bold mt-1 px-4">Add Cart</button>
        <button  onClick={() => navigate(`/product/${product._id}`)} className="text-white bg-green-500 rounded p-3 font-bold mt-1 px-4 ml-2">View</button>
        </div>
        
    )
}
export default Productcard