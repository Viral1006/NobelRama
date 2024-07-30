import React from 'react';
// import { useNavigate, Link } from 'react-router-dom';
import Celebrating from './Celebrating';
import Formfooter from './Formfooter';
import Journey from './Journey';
import Lucky from './Lucky';
import Categories from './Categories';
import { useNavigate } from "react-router-dom";
// import logo1 from '/logo1.png';

const Homepage = () => {

const navigate = useNavigate();
const openWinnersPage = () => {
    navigate("/winners");
  };

  return (
    <div className='overflow-x-hidden' >
    <div className='bg-[#443c68] h-screen flex flex-col items-center justify-center'>
      <div className='font-abril smmax:text-5xl text-9xl mt-20 text-white '>
        NOBELRAMA
      </div>
      {/* <div className='w-1/2 flex items-center justify-center p-4 custom-max-500:block'>
        <div className='flex items-center'>
          <img src={logo1} alt='Logo' className='w-14 smmax:w-28 ml-4 my-2 rounded-[50%] h-auto' />
        </div>
      </div> */}
      <div className='font-zilla-slab text-xl text-white text-center mt-4 p-10'>
        Welcome to NobelRama - the ultimate hub of <br /> knowledge on Nobel Prize Winners!
        Unveil the<br /> brilliant minds that transformed the world in the<br /> last century.
      </div>
      {/* <button onClick={handleButtonClick} className='mt-4 bg-white text-[#635985] font-zilla-slab 
      font-normal py-2 px-4 rounded-lg transition-transform duration-300 transform hover:scale-110 '>
        Meet the Laureates
      </button> */}
      {/* <Link to="/Winners" target="_blank" className='mt-4 bg-white text-[#635985] font-zilla-slab font-normal py-2 px-4 rounded-lg transition-transform duration-300 transform hover:scale-110'>
        Meet the Laureates
      </Link> */}
      <button onClick={openWinnersPage} className='mt-4 bg-white text-[#635985] font-zilla-slab font-normal 
      py-2 px-4 rounded-lg transition-transform duration-300 transform hover:scale-110 hover:bg-[#333333] hover:text-white'>
        Meet the Laureates
      </button>
    </div>
    <Celebrating />
      <Categories />
      <Journey />
      <Lucky />
      <Formfooter />
      </div>
      
  );
};

export default Homepage;

