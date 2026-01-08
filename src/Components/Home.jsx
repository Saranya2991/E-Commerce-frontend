import Photo from "../assets/image.jpeg";
import { Link } from "react-router-dom"
import About from "./About";
import NewsLetter from "./NewsLetter";

import Products from "./Products";


function Home(){
    return(
        <>
        <div className="mt-20 grid lg:grid-cols-2 bg-green-100">
            <div>
        <img src={Photo} alt="hero-img" className="h-96 p-6 sm:mt-4 sm:ml-11 md:ml-28 lg:ml-12 xl:ml-20" />
        </div>
        <div className="h-96 mt-6 p-10">
            <h1 className="text-3xl font-bold">Fruits & Vegetables</h1>
            <p className="text-justify mt-3">Buy fresh fruits and vegetables online with ease. Our online grocery store offers a wide range of seasonal fruits, green vegetables, organic produce, and daily essentials at affordable prices. Enjoy fast delivery, secure payments, and guaranteed freshness with every order.</p>
        <div>
            <button className="bg-green-500 text-xl font-semibold p-2 sm:mt-8 md:mt-5 rounded">
                <Link to={"/products"}>Shop Now</Link></button>
        </div>
        </div>
        </div>
        
        <About />
        <NewsLetter />
        
        </>
    )
}

export default Home