import Productcard from "./Section/productcard"
import React, { useEffect, useState } from "react";
import axios from "axios";

function Products(){
//     const products = [
//     {
//         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQjAfVMSv0rvTIJl97anIxiSC29qJZKjXSg&s",
//         title:"Kiwi",
//         price:"₹200",
//     },
//     {
//         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiZcBq4DZml42mRKXAUuIJ5Anu0WfL19GYsA&s",
//         title:"Apple",
//         price:"₹250",
//     },
//     {
//         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWy2deoCitSxEOI52ZF-v5s0YK5B74oDSDIQ&s",
//         title:"Orange",
//         price:"₹100",
//     },
//     {
//         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJWNpeArUq2C63BqWVSXTcNifcF4gSazgew&s",
//         title:"Carrot",
//         price:"₹100",
//     },
//     {
//         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ri6yaiiNsbeSDJaA6DDUGr9-GSOKs2UqdQ&s",
//         title:"Tomato",
//         price:"₹50",
//     },
//     {
//         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQdpOGq6wJ6aLmTkaWrfwWU6S09zmNlqbtcQ&s",
//         title:"Mango",
//         price:"₹400",
//     },
//     {
//         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXGJo9WfSbI-rQ3TwTfbddwKOYLI0KRMnMHg&s",
//         title:"Cauliflower",
//         price:"₹150",
//     },
//     {
//         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnciW5w-jCOnI1XnAhc1RuNq5BgYubMy5Zhw&s",
//         title:"Strawberry",
//         price:"₹200",
//     },
//     {
//         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSavltt14-pEhhFFT_4To5YrYmwY2ZSUoqidw&s",
//         title:"Cucumber",
//         price:"₹300",
//     },
//     {
//         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdux0YALwGUnHbS_2TIlbXxliO0UH3VcdWw&s",
//         title:"Radish",
//         price:"₹200",
//     },
// ]

const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/product"); // backend route
      console.log(res.data);
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

   useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  if (loading) return <p className="mt-8">Loading products...</p>;
  if (!products.length) return <p className="mt-8">No products found</p>;

    return(
        <div className="my-20">
        <h1 className="text-4xl font-bold">Products</h1>
        <div className="flex gap-4 mb-6 mt-6 justify-center">
        <input
          type="text"
          placeholder="Search products..."
          className="border border-green-400 p-2 rounded w-2/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border border-green-400 p-2 rounded"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
            
            {filteredProducts.map((item)=>(
                <Productcard 
                    key={item._id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    product={item}
                />
        ))}
        </div>
    
        </div>
    )
}
export default Products