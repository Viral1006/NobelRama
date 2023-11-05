import React from 'react'
import { useNavigate } from 'react-router-dom';

const Journey = () => {
//     const navigate = useNavigate();

//   const handleButtonClick = () => {
//     navigate('/winners'); // Navigate to the winners page
//   };
const navigate = useNavigate();
const openWinnersPage = () => {
  // window.open('/winners', '_blank');
  navigate("/winners");
};
  return ( 
    <div className='bg-[#443c68] overflow-visible w-full h-[60vh] flex flex-col items-start justify-center'>
      <div className='font-abril text-[40px] text-left flex-col-start ml-48 text-[#ffffff]  mt-1'>
        Embark on a journey through time and witness<br/>  the lives of these 
        incredible laureates. Filter by<br/>  categories and years to immerse yourself in a coveted<br/>  universe of  
        wisdom!
      </div>
      <div className='flex ml-48 mt-4'>
        <button  onClick={openWinnersPage} className='mr-4 bg-[#635985] hover:bg-[#333333] text-white font-zilla-slab font-normal py-2 px-4 rounded-lg transition-transform duration-300 transform hover:scale-110'>
          Explore Winners
        </button>
        <button className='bg-[#333333] hover:bg-[#635985] text-white font-zilla-slab font-normal py-2 px-4 rounded-lg transition-transform duration-300 transform hover:scale-110'>
          Filter Results
        </button>
      </div>
    </div>
  );
};

export default Journey;