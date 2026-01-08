import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext.jsx";
import { useNavigate } from 'react-router-dom'
import auth from "../config/firebase"
import { signOut } from 'firebase/auth'

const navlink = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Products",
        path: "/products"
    },
    
    
]


function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    const { cart } = useCart();

    const navigate = useNavigate()
    const [log,setLog] = useState(false)

    useEffect(()=>{
      auth.onAuthStateChanged(function(user){
        if(user)
        {
          setLog(true)
          console.log("User Logged In")
        }
        else{
          setLog(false)
          console.log("User Logged Out")
        }
      })
    },[])

    function logout() {
  signOut(auth).then(() => {
    navigate("/login");
  });
}
    return(
        <div className="relative">
        <nav className="flex justify-between bg-green-900 p-3 text-white fixed top-0 z-10 w-full">
            
            <h1 className="text-3xl font-bold">Online Market</h1>
            
            <ul className="hidden lg:flex gap-5 items-center">
                <Link to="/addcart" className="relative mr-10">
          <FaShoppingCart className="text-3xl cursor-pointer" />
          {cart.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-sm">
          {cart.length}
        </span>
      )}
        </Link>
                {navlink.map((link, index) => (
                        <li key={index} className="bg-green-500 p-2 px-4 rounded">
                        <Link to = {link.path}>
                            {link.name}
                        </Link>
                    </li>
                  
                ))} 
                {
              log? <button className='bg-green-500 p-2 px-4 rounded' onClick={logout}>Logout</button>:<button className='bg-green-500 p-2 px-4 rounded' onClick={()=>navigate("/login")}>Login</button>
            }
            </ul>
            
            <button
          className="lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? (
            // Close Icon (X)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7"
          >
          <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          )}
        </button>
        
      
            {isOpen && (
        <ul className="absolute left-0 top-full w-full bg-cyan-800 lg:hidden flex flex-col gap-3 px-5 py-4 shadow-lg">
          <Link to="/addcart" className="relative">
          <FaShoppingCart className="text-3xl cursor-pointer ml-[280px] md:ml-[345px]" />
          {cart.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-sm">
          {cart.length}
        </span>
      )}
        </Link>
          {navlink.map((link, index) => (
            <li key={index} className="hover:text-black">
              <Link to={link.path} onClick={() => setIsOpen(false)}>
              {link.name}
          </Link>
            </li>
          ))}
          {
              log? <button className='p-2 px-4' onClick={logout}>Logout</button>:<button className='p-2 px-4' onClick={()=>navigate("/login")}>Login</button>
            }
        </ul>
      )}
      
        </nav>


        </div>
    )
}
export default Navbar