
// import React, { useContext, useState } from "react";
// import products from "../product"; // Your product data
// import { CartContext } from "../context/CartContext";

// const Product = () => {
//   const { addToCart } = useContext(CartContext);
//   const [searchTerm, setSearchTerm] = useState(""); // Filter input

//   // Filter products based on search term
//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="p-6 sm:p-10 bg-gray-50 min-h-screen">
//       {/* Title */}
//       <h1 className="text-3xl font-extrabold text-center mb-6 text-blue-700 tracking-wide">
//         Our Products
//       </h1>

//       {/* Filter Input */}
//       <div className="flex justify-center mb-10">
//         <input
//           type="text"
//           placeholder="Search by product name..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full max-w-md p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {filteredProducts.map((product) => (
//           <div
//             key={product.id}
//             className="border rounded-2xl p-6 shadow-md bg-white hover:shadow-xl transition transform hover:-translate-y-1"
//           >
//             {/* Product Image */}
//             <div className="flex justify-center">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-[150px] h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 object-contain mb-4 rounded-lg bg-gray-100 p-4"
//               />
//             </div>

//             {/* Product Details */}
//             <h2 className="text-lg font-semibold text-gray-800 text-center sm:text-left">
//               {product.name}
//             </h2>
//             <p className="text-gray-500 text-sm mt-1 line-clamp-2 text-center sm:text-left">
//               {product.description}
//             </p>

//             <p className="text-xl font-bold mt-3 text-blue-600 text-center sm:text-left">
//               ₹{product.price}
//             </p>

//             {/* Add to Cart Button */}
//             <button
//               className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
//               onClick={() => addToCart(product)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Product;


// import React, { useContext, useState, useEffect } from "react";
// import axios from "axios";
// import { CartContext } from "../context/CartContext";
// import { AppContext } from "../pages/Appcontext";

// const Product = () => {
//   const { addToCart } = useContext(CartContext);
//   const { backendUrl } = useContext(AppContext); // backend url lelo
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);

//   // Backend se products fetch
//   useEffect(() => {
//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get(`${backendUrl}/api/product/all`);
//       setProducts(res.data.products || []); // ✅ yaha change
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchProducts();
// }, [backendUrl]);


//   // Filter logic
//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="p-6 sm:p-10 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-extrabold text-center mb-6 text-blue-700 tracking-wide">
//         Our Products
//       </h1>

//       {/* Search Bar */}
//       <div className="flex justify-center mb-10">
//         <input
//           type="text"
//           placeholder="Search by product name..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full max-w-md p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Loader */}
//       {loading ? (
//         <p className="text-center text-gray-600">Loading products...</p>
//       ) : filteredProducts.length === 0 ? (
//         <p className="text-center text-gray-600">No products found.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {filteredProducts.map((product) => (
//             <div
//               key={product._id}
//               className="border rounded-2xl p-6 shadow-md bg-white hover:shadow-xl transition transform hover:-translate-y-1"
//             >
//               {/* Product Image */}
//               <div className="flex justify-center">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-[150px] h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 object-contain mb-4 rounded-lg bg-gray-100 p-4"
//                 />
//               </div>

//               {/* Details */}
//               <h2 className="text-lg font-semibold text-gray-800 text-center sm:text-left">
//                 {product.name}
//               </h2>
//               <p className="text-gray-500 text-sm mt-1 line-clamp-2 text-center sm:text-left">
//                 {product.description}
//               </p>

//               <p className="text-xl font-bold mt-3 text-blue-600 text-center sm:text-left">
//                 ₹{product.price}
//               </p>

//               {/* Add to Cart */}
//               <button
//                 className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
//                 onClick={() => addToCart(product)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Product;

import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { AppContext } from "../pages/Appcontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const { addToCart } = useContext(CartContext);
  const { backendUrl } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [listening, setListening] = useState(false);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/product/all`);
        setProducts(res.data.products || []);
        setFilteredProducts(res.data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [backendUrl]);

  // Text search filter
  useEffect(() => {
    if (!searchTerm) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  // Voice recognition
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      toast.error("Speech Recognition not supported in your browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();
    setListening(true);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      console.log("Voice Input:", transcript);
      handleVoiceCommand(transcript);
      setListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      toast.error("Speech recognition error: " + event.error);
      setListening(false);
    };
  };

  const handleVoiceCommand = (text) => {
    const lowerText = text.toLowerCase();
    const priceMatch = lowerText.match(/\d+/);
    const price = priceMatch ? parseInt(priceMatch[0]) : null;

    const lessKeywords = ["less", "les", "lessthan", "below", "under", "cheap"];
    const greaterKeywords = ["greater", "more", "above", "expensive"];
    const isLess = lessKeywords.some((w) => lowerText.includes(w));
    const isGreater = greaterKeywords.some((w) => lowerText.includes(w));

    let detectedProducts = products.filter((p) =>
      p.name.toLowerCase().split(" ").every(word => lowerText.includes(word))
    );

    if (price) {
      if (isLess) {
        detectedProducts = detectedProducts.filter(p => p.price <= price);
      } else if (isGreater) {
        detectedProducts = detectedProducts.filter(p => p.price >= price);
      }
    }

    // Reset filteredProducts properly
    if (detectedProducts.length > 0) {
      setFilteredProducts(detectedProducts);
      toast.success(`${detectedProducts.length} product(s) filtered!`);
    } else {
      setFilteredProducts([]);
      toast.info("No product found!");
    }
  };

  // Other products = products not in filtered
  const otherProducts = products.filter(p => !filteredProducts.includes(p));

  return (
    <div className="p-6 sm:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center mb-6 text-blue-700 tracking-wide">
        Our Products
      </h1>

      {/* Instruction */}
      <div className="text-center text-gray-600 mb-6">
        🎤 Click the voice button and say the product name with price filter.<br/>
        Example: <span className="font-semibold">"less than 500 hair dryer"</span> or <span className="font-semibold">"above 1000 dishwasher"</span>
      </div>

      {/* Search + Voice */}
      <div className="flex justify-center gap-3 mb-10">
        <input
          type="text"
          placeholder="Search by product name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={startListening}
          className={`px-4 py-2 rounded-lg text-white ${
            listening ? "bg-red-500" : "bg-green-600"
          }`}
        >
          {listening ? "Listening..." : "🎤 Voice"}
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading products...</p>
      ) : (
        <>
          {/* Filtered Products Section */}
          {filteredProducts.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
                Filtered Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product._id} product={product} addToCart={addToCart} />
                ))}
              </div>
            </div>
          )}

          {/* Other Products Section */}
          {otherProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
                Other Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {otherProducts.map((product) => (
                  <ProductCard key={product._id} product={product} addToCart={addToCart} />
                ))}
              </div>
            </div>
          )}
        </>
      )}

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

// Product card component
const ProductCard = ({ product, addToCart }) => (
  <div className="border rounded-2xl p-6 shadow-md bg-white hover:shadow-xl transition transform hover:-translate-y-1">
    <div className="flex justify-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-[150px] h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 object-contain mb-4 rounded-lg bg-gray-100 p-4"
      />
    </div>
    <h2 className="text-lg font-semibold text-gray-800 text-center sm:text-left">{product.name}</h2>
    <p className="text-gray-500 text-sm mt-1 line-clamp-2 text-center sm:text-left">{product.description}</p>
    <p className="text-xl font-bold mt-3 text-blue-600 text-center sm:text-left">₹{product.price}</p>
    <button
      className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
      onClick={() => addToCart(product)}
    >
      Add to Cart
    </button>
  </div>
);

export default Product;
