import React from 'react';
import Heroimage from "../Assets/hero.png";
import Navbar from './Navbar';
import Job from './Job';

const Hero = () => {
  return (
    <div className="App bg-gradient-to-r from-[#ae59bd] to-[#50105b] min-h-screen items-center justify-center relative">
        <Navbar />
    
    <div >
      
      <div className="relative flex items-center justify-center min-h-screen">
        {/* Content Section */}
        <div className="flex items-center space-x-10 z-10">
          {/* Use h2 or h3 for a larger heading */}
          <div>
          <h2 className="color-fill text-6xl font-bold text-center">
            Join Talent Match and take the first step <br />towards your dream career!
          </h2>
          <div className=" ml-10 w-[800px] h-[200px] rounded-lg p-4 bg-white/30 backdrop-blur-sm text-white mt-5">
          <p className="text-center">This is a bordered div with some content.</p>
        </div>
          </div>
          {/* Hero Image */}
          <img src={Heroimage} alt="Hero" className="w-[700px] h-auto object-cover mr-10" />
        </div>

        {/* Circular Blue Spread Effect */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-[800px] h-[600px] bg-[#3b258b] rounded-full blur-3xl opacity-40 z-0"></div>

        {/* Circular Pink Spread Effect */}
        <div className="absolute left-10 bottom-1/4 transform translate-y-1/2 w-[800px] h-[600px] bg-pink-500 rounded-full blur-3xl opacity-30 z-0"></div>
      </div>
    </div>
    <Job/>
    </div>
  );
};

export default Hero;
