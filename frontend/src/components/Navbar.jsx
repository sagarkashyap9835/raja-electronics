

// import React, { useState, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { assets } from '../assets/assets';
// import { AppContext } from '../pages/Appcontext';
// import { toast } from 'react-toastify';
// const Navbar = () => {
//   const navigate = useNavigate();
//   const [showMenu, setShowMenu] = useState(false);
//   const { token, setToken, userData } = useContext(AppContext);

//   const logout = () => {
//     setToken(false);
//     localStorage.removeItem('token');
//     toast.success('User Logout Successfully');
//   };

//   const handleLinkClick = (path) => {
//     navigate(path);
//     setShowMenu(false);
//   };

//   return (
//     <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 shadow-md bg-white relative z-30">
//       {/* Logo */}
//       <Link to="/">
//         <h1 className='text-red-500 text-3xl font-bold'>RAJA ELECTRONICS SHOP</h1>
//       </Link>

//       {/* Desktop Links */}
//       <div className="hidden md:flex gap-6 text-base md:text-lg font-medium">
//         <Link to="/" className="hover:underline">Home</Link>
//         <Link to="/product" className="hover:underline">Product</Link>
//         <Link to="/about" className="hover:underline">About</Link>
//         <Link to="/contact" className="hover:underline">Contact</Link>
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center gap-3 md:gap-4">

//         {token && userData ? (
//           <div className="relative group cursor-pointer">
//             <div className="flex items-center gap-2">
//               <img className="w-12 h-12 md:w-16 md:h-16 rounded-full" src={userData.image} alt="Profile" />
//               <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
//             </div>
//             <div className="absolute top-10 right-0 hidden group-hover:block bg-slate-500 text-white rounded-md p-4 shadow-md z-20 w-40 space-y-2">
//               <p onClick={() => navigate("/my-profile")} className="hover:text-black cursor-pointer">My profile</p>
//               <p onClick={() => navigate("/my-order")} className="hover:text-black cursor-pointer">My Order</p>
//               <p onClick={logout} className="hover:text-black cursor-pointer">Logout</p>
//             </div>
//           </div>
//         ) : (
//           <button
//             className="bg-blue-600 text-white px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base rounded hover:bg-blue-700 transition"
//             onClick={() => navigate('/login')}
//           >
//             Create an Account
//           </button>
//         )}

//         {/* Mobile Menu Icon */}
//         <img
//           onClick={() => setShowMenu(true)}
//           src={assets.menu_icon}
//           className="w-5 h-5 md:hidden cursor-pointer"
//           alt="Menu"
//         />
//       </div>

//       {/* Mobile Sidebar Menu */}
//       <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6 transform transition-transform duration-300 ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
//         <div className="flex justify-between items-center mb-8">
//           {/* <img src={assets.logo} alt="Logo" className="h-8" />
//            */}
//            <h1>RAJA ELECTRONICS SHOP</h1>
//           <img
//             onClick={() => setShowMenu(false)}
//             src={assets.cross_icon}
//             alt="Close"
//             className="w-6 h-6 cursor-pointer"
//           />
//         </div>
//         <div className="flex flex-col gap-5 text-lg font-medium">
//           <p className="hover:underline cursor-pointer" onClick={() => handleLinkClick('/')}>Home</p>
//           <p className="hover:underline cursor-pointer" onClick={() => handleLinkClick('/product')}>Product</p>
//           <p className="hover:underline cursor-pointer" onClick={() => handleLinkClick('/about')}>About</p>
//           <p className="hover:underline cursor-pointer" onClick={() => handleLinkClick('/contact')}>Contact</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { AppContext } from '../pages/Appcontext';
import { toast } from 'react-toastify';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    setToken(false);
    localStorage.removeItem('token');
    toast.success('User Logout Successfully');
  };

  const handleLinkClick = (path) => {
    navigate(path);
    setShowMenu(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-red-600 text-2xl md:text-3xl font-extrabold tracking-wide">
            RAJA<span className="text-gray-800"> ELECTRONICS</span>
          </h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-lg font-medium text-gray-700">
          <Link to="/" className="hover:text-red-500 transition">Home</Link>
          <Link to="/product" className="hover:text-red-500 transition">Products</Link>
          <Link to="/about" className="hover:text-red-500 transition">About</Link>
          <Link to="/contact" className="hover:text-red-500 transition">Contact</Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 md:gap-6">
          {token && userData ? (
            <div className="relative group cursor-pointer">
              <div className="flex items-center gap-2">
                <img
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 object-cover"
                  src={userData.image}
                  alt="Profile"
                />
                <img className="w-3" src={assets.dropdown_icon} alt="Dropdown" />
              </div>
              <div className="absolute top-12 right-0 hidden group-hover:block bg-white border border-gray-200 rounded-lg shadow-md z-20 w-44">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-order")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  My Orders
                </p>
                <p
                  onClick={logout}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                >
                  Logout
                </p>
              </div>
            </div>
          ) : (
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm md:text-base hover:bg-blue-700 transition"
              onClick={() => navigate('/login')}
            >
              Create Account
            </button>
          )}

          {/* Mobile Menu Icon */}
          <img
            onClick={() => setShowMenu(true)}
            src={assets.menu_icon}
            className="w-6 h-6 md:hidden cursor-pointer"
            alt="Menu"
          />
        </div>
      </nav>

      {/* Background Overlay (for blur effect) */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
          onClick={() => setShowMenu(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`absolute top-0 right-0 bg-white shadow-lg z-50 w-64 rounded-l-2xl transition-transform duration-300 ${
          showMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-red-600">RAJA ELECTRONICS</h2>
          <img
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            alt="Close"
            className="w-6 h-6 cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-4 px-6 py-4 text-lg font-medium text-gray-700">
          <p onClick={() => handleLinkClick('/')} className="hover:text-red-500 cursor-pointer">Home</p>
          <p onClick={() => handleLinkClick('/product')} className="hover:text-red-500 cursor-pointer">Products</p>
          <p onClick={() => handleLinkClick('/about')} className="hover:text-red-500 cursor-pointer">About</p>
          <p onClick={() => handleLinkClick('/contact')} className="hover:text-red-500 cursor-pointer">Contact</p>
        </div>

        <div className="px-6 pb-4">
          {token ? (
            <button
              onClick={logout}
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => handleLinkClick('/login')}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login / Signup
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
