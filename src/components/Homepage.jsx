import React from 'react';
// import { useNavigate, Link } from 'react-router-dom';
import Celebrating from './Celebrating';
import Formfooter from './Formfooter';
import Journey from './Journey';
import Lucky from './Lucky';
import Categories from './Categories';
import { useNavigate } from "react-router-dom";
const Homepage = () => {
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     navigate('/winners'); // Navigate to the winners page
//   };
const navigate = useNavigate();
const openWinnersPage = () => {
    window.open('/winners', '_blank');
    navigate("/winners");
  };

  return (
    <div>
    <div className='bg-[#443c68] overflow-visible w-full h-[100vh] min-h-[600px] flex flex-col items-center justify-center'>
      <div className='font-abril text-9xl mt-20 text-white '>
        NOBELRAMA
      </div>
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

