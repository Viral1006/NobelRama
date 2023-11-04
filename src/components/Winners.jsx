// import React from 'react'

// const Winners = () => {
//   return (
//     <div className='bg-[#DA9F93] overflow-visible w-full h-auto min-h-[850px] flex flex-col items-center justify-center'>
//         <div className='font-abril text-[40px] mt-8 mb-10 text-[#890620] '>
//             Nobel Winners
//         </div>
//         {/* <div className='font-zilla-slab text-xl text-[#890620] text-center mt-1 pb-10 pt-5'>
//         Get inspired by these four exceptional human beings who have won<br/> the Nobel Prize multiple times! Let their incredible stories captivate<br/> your curiosity.
//         </div> */}

//         <div className='flex space-x-10 mb-10'>
//         {/* Nobel Prize Category Buttons */}
//             <button className='w-auto h-10 bg-none text-white font-zilla-slab font-normal rounded-lg transition-transform duration-300 transform hover:scale-110'>
//             Physics
//             </button>
//             <button className='w-auto h-10 bg-none text-white font-zilla-slab font-normal rounded-lg transition-transform duration-300 transform hover:scale-110'>
//             Chemistry
//             </button>
//             <button className='w-auto h-10 bg-none text-white font-zilla-slab font-normal rounded-lg transition-transform duration-300 transform hover:scale-110'>
//             Literature
//             </button>
//             <button className='w-auto h-10 bg-none text-white font-zilla-slab font-normal rounded-lg transition-transform duration-300 transform hover:scale-110'>
//             Medicine
//             </button>
//             <button className='w-auto h-10 bg-none text-white font-zilla-slab font-normal rounded-lg transition-transform duration-300 transform hover:scale-110'>
//             Peace
//             </button>
//         </div>


//         <div className='grid grid-cols-2 grid-rows-2 gap-4 font-abril'>
//             <div className='w-auto h-48 px-20 py-32 bg-[#d38e80] rounded-xl'>
//                 {/* <div className=' items-center justify-center w-10 h-10 bg-black rounded-full '></div> */}
//                 <div className='text-lg font-abril -mt-16' >Marie Curie</div>
//                 <div className='font-zilla-slab text-base mt-2 ' >2018</div>
//                 <div className='font-zilla-slab text-base mt-2' >Chemistry</div>
//                 <div className='font-zilla-slab text-base mt-2' >For the discovery and synthesis of quantum dots</div>
//             </div>

//         </div>
//     </div>
//   )
// }

// export default Winners

// src/components/Winners.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Winners = () => {
  const [winnersData, setWinnersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/prize.json');
        // Assuming the API response has a 'prizes' property containing the winners data
        setWinnersData(response.data.prizes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Nobel Prize Winners</h1>
      <ul>
        {winnersData.map((winner, index) => (
          <li key={index}>
            Year: {winner.year}, Category: {winner.category}<br />
            Motivation: {winner.laureates[0].motivation}<br />
            Laureate: {winner.laureates[0].firstname} {winner.laureates[0].surname}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Winners;

