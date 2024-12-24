import React from "react";
import Image from "next/image";

const Cart = () => {
  return (
    <div className="py-10 bg-purple-50">
      <div className="container mx-auto flex items-center gap-10">
        {/* Left Section - Image */}
        <div className="flex-1">
          <Image
            src="/sofa.png"
            alt="Blue Velvet Chair"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Right Section - Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Unique Features Of Latest & Trending Products
          </h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center">
              <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-4"></span>
              All frames constructed with hardwood solids and laminates
            </li>
            <li className="flex items-center">
              <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-4"></span>
              Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
            </li>
            <li className="flex items-center">
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-4"></span>
              Arms, backs and seats are structurally reinforced
            </li>
          </ul>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              B&B Italian Sofa
            </h3>
            <p className="text-xl text-gray-600 mb-4">$32.00</p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;