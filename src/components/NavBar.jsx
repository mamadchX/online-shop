import logo from '../assets/images/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { ShoppingCart } from 'phosphor-react';

const NavBar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-[1000]">
      {/* Top Header Section */}
      <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between">
        {/* Logo - Always Visible */}
        <div className=" justify-center w-40 hidden md:block mb-2 sm:mb-0">
          <img src={logo} alt="Logo" className="w-12 h-12" />
        </div>

        {/* Search Bar - Full Width on Mobile, Normal Width on Larger Screens */}
        <div className="w-full md:w-[25rem] ">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="جستجوی محصولات..."
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-200"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Buttons - Visible on Desktop, Hidden on Mobile */}
        <div className="hidden sm:flex items-center space-x-4">
          {/* Login Button */}
          <button className="mx-3 text-[0.8rem] px-4 py-2 border text-pink-500 rounded-md transition duration-300 hover:bg-pink-500 hover:text-white">
            ورود
          </button>

          {/* Cart Button */}
          <button className="relative">
            <Link to={'/cart'}>
              <ShoppingCart size={32} />
            </Link>
          </button>
        </div>
      </div>

      {/* Bottom Navigation for Mobile and Tablet */}
      <nav className="block sm:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md py-2 px-4 flex justify-around items-center z-50 border-t border-gray-200">
        {/* Links */}
        <Link to="/" className="flex flex-col items-center text-stone-500 hover:text-pink-500 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0l-2-2m2 2V4a1 1 0 011-1h3m-6 9l2 2M7 12h10" />
          </svg>
          <span className="text-xs">خانه</span>
        </Link>
        <Link to="/store" className="flex flex-col items-center text-stone-500 hover:text-pink-500 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span className="text-xs">محصولات</span>
        </Link>

        {/* Buttons in Bottom Navigation */}
        <button className="flex flex-col items-center text-stone-500 hover:text-pink-500 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
          <span className="text-xs">ورود</span>
        </button>
        <button className="relative flex flex-col items-center text-stone-500 hover:text-pink-500 transition duration-300">
          <Link to={'/cart'}>
            <ShoppingCart size={24} />
          </Link>
          <span className="text-xs">سبد خرید</span>
        </button>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden sm:block bg-stone-800">
        <div className="container mx-auto px-4 py-2">
          <ul className="flex items-center space-x-6 text-stone-50">
            <li>
              <Link to="/" className="hover:text-pink-500 transition duration-300">
                خانه
              </Link>
            </li>
            <li>
              <Link to="/store" className="hover:text-pink-500 transition duration-300">
                محصولات
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition duration-300">
                خدمات
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition duration-300">
                تماس با ما
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;