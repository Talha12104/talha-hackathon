"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
 
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);


  return (
    <main className='border-b-2 bg-neutral-100'>
      <div className='w-full flex items-center justify-center bg-white h-[85px]'>
        {/* all content */}
        <div className='sm:w-full md:w-[80%] flex items-center justify-between h-full px-4'> {/* Added padding on left and right */}

          {/* Logo */}
          <div className="flex items-center justify-center">
            <h2 className="title-font font-extrabold text-blue-950 tracking-widest text-[34px] mb-0">
              Hekto
            </h2>
          </div>

       {/* Center Section: Navigation Links */}
       <div className="hidden sm:flex items-center gap-x-8">
            <ul className="flex gap-x-8 items-center">
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href="/">
                  Home
                </Link>
              </li>
              <li className="relative">
                <button
                  className="hover:text-[#FB2E86] transition-colors"
                  onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)} // Toggle the Pages menu
                >
                  Pages
                </button>
                {isPagesDropdownOpen && (
                  <ul className="absolute top-full mt-2 bg-white shadow-md rounded-md text-black text-sm">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/Cart">Cart</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/Checkout">Billing Details</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/Ordercompleted">Order Completed</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/About">About Us</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/Contact">Contact Us</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/Account">My Account</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/Creatorpage">About Creator</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/Faq">FAQ</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href="/Blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href="/Shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href="/Contact">
                Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className='flex gap-x-4 items-center'>
            {/* Search bar - hidden on small screens */}
            <div className='hidden lg:flex w-full max-w-xs bg-gray-200   items-center'>
              <input
                className='w-90 p-2  bg-white  border border-gray-200 text-[20px]'
                type="search"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="text-xl ml- h-[36px] bg-pink-600 px-2 py-2 text-white"
              />
            </div>

            {/* Toggle Button for mobile */}
            <button
              className="text-black block md:hidden text-3xl z-50"
              onClick={toggle}
            >
              ☰
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Navbar;
