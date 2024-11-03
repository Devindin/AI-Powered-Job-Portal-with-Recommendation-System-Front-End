import React from "react";

const Navbar = () => {
  return (
    <nav className=" p-4 ">
      <div className="container mx-auto flex justify-between items-center mt-8">
        <div className="bg-gradient-to-r from-[#6ce761] to-[#ffb347] bg-clip-text text-transparent text-4xl font-bold font-poppins transition duration-300">
          Talent Match
        </div>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffb347]"
          />
          <button className="bg-[#ffb347] text-white px-4 py-2 rounded-r-md hover:bg-[#ba8336]">
            Search
          </button>
        </div>
        <button className="bg-[#5cde3b] text-white px-4 py-2 rounded-md hover:bg-[#ba8336]">
          Login
        </button>
        <button className="bg-[#5cde3b] text-white px-4 py-2 rounded-md hover:bg-[#ba8336]">
          sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
