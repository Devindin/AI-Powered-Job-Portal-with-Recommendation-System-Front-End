import React from 'react';
import Heroimage from "../Assets/hero.png";
import Navbar from './Navbar';

const Hero = () => {
  return (
<div>
    <Navbar/>
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Content Section */}
      
      <div className="flex items-center space-x-10 z-10">
        <div className="w-[800px] h-[200px] rounded-lg p-4 bg-white/30 backdrop-blur-sm text-white">
          <p className="text-center">This is a bordered div with some content.</p>
        </div>

        {/* Hero Image */}
        <img src={Heroimage} alt="Hero" className="w-[600px] h-auto object-cover mr-10" />
      </div>

      {/* Circular Blue Spread Effect */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-[800px] h-[600px] bg-[#3b258b] rounded-full blur-3xl opacity-40 z-0"></div>

      {/* Circular Pink Spread Effect */}
      <div className="absolute left-10 bottom-1/4 transform translate-y-1/2 w-[800px] h-[600px] bg-pink-500 rounded-full blur-3xl opacity-30 z-0"></div>
    </div>
    </div>
  );
};

export default Hero;
