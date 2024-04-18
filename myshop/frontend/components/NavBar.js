import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img width={20} src="logo.svg" alt=""/>
      <span className="ml-3 text-xl">My Shop</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    
      <Link href="/">Home</Link>&nbsp;&nbsp;
      <Link href="/about">About</Link>&nbsp;&nbsp;
      <Link href="/contact">Contact Us</Link>&nbsp;&nbsp;
      <Link href="/products">Products</Link>&nbsp;&nbsp;
    </nav>
    <button className="text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded-text-sm">Login
      </button>
  </div>
</header>
   </div>
  )
}

export default NavBar
