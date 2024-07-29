// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Winners = () => {
//   const [nobelPrizes, setNobelPrizes] = useState([]);
//   const [filteredPrizes, setFilteredPrizes] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedYear, setSelectedYear] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get('https://api.nobelprize.org/v1/prize.json')
//       .then(response => {
//         console.log('API Response:', response.data); // Log the API response
//         setNobelPrizes(response.data.prizes);
//         setFilteredPrizes(response.data.prizes);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       });
//   }, []);

//   const handleCategoryClick = (category) => {
//     const filtered = nobelPrizes.filter(prize => 
//       prize.category === category && (!selectedYear || prize.year === selectedYear)
//     );
//     setFilteredPrizes(filtered);
//     setSelectedCategory(category);
//   };

//   const handleYearChange = (year) => {
//     const filtered = nobelPrizes.filter(prize => 
//       (!selectedCategory || prize.category === selectedCategory) && (!year || prize.year === year)
//     );
//     setFilteredPrizes(filtered);
//     setSelectedYear(year);
//   };

//   if (loading) {
//     return <div>Loading...</div>; // or any loading indicator you prefer
//   }

//   return (
//     <div className='bg-[#ffffff] overflow-visible w-full h-auto min-h-[850px] flex flex-col items-center justify-center'>
//       <div className='font-abril text-[40px] mt-8 mb-10 text-[#333333]'>
//         Nobel Winners
//       </div>

//       {/* <div className='flex space-x-10 mb-10'> */}
         
//       {/* {['Physics', 'Chemistry', 'Literature', 'Medicine', 'Peace'].map(category => (
//         <button
//           key={category}
//           className={`w-auto h-10 bg-none text-white font-zilla-slab font-normal rounded-lg transition-transform duration-300 transform hover:scale-110 ${selectedCategory === category ? 'bg-[#890620]' : ''}`}
//           onClick={() => handleCategoryClick(category)}
//         >
//           {category}
//         </button>
//       ))} */}
//       {/* </div> */}

//       <div className='flex items-center space-x-4 mb-4 mr-[80%] '>
//         <label htmlFor='yearFilter' className='font-zilla-slab text-lg'>Filter by Year:</label>
//         <select
//           id='yearFilter'
//           className='w-32 h-10 border border-gray-400 rounded-lg p-2 focus:outline-none'
//           value={selectedYear}
//           onChange={(e) => handleYearChange(e.target.value)}
//         >
//           <option value=''>All</option>
//           {Array.from({ length: 2025 - 1901 }, (_, i) => 1901 + i).map(year => (
//             <option key={year} value={year}>
//               {year}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className='grid grid-cols-4 grid-rows-4 gap-4 font-abril mx-4'>
//         {filteredPrizes.map((prize, index) => (
//           <div key={index} className='w-auto h-48 px-20 py-32 bg-[#ebebeb] text-[#333333] rounded-xl'>
//             <div className='text-lg font-abril -mt-16'>{prize.year}</div>
//             <div className='font-zilla-slab text-base mt-2'>{prize.category}</div>
//             {prize.laureates && prize.laureates.map((laureate, innerIndex) => (
//               <div key={`${index}-${innerIndex}`} className='font-abril text-base mt-2'>
//                 {laureate.firstname} {laureate.surname}
//               </div>
//             ))}
//             {/* {prize.overallMotivation && (
//               <div className='font-abril text-sm mt-2'>
//                 {prize.overallMotivation}
//               </div>
//             )} */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Winners;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Winners = () => {
//   const [nobelPrizes, setNobelPrizes] = useState([]);
//   const [filteredPrizes, setFilteredPrizes] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedYear, setSelectedYear] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get('https://api.nobelprize.org/v1/prize.json')
//       .then(response => {
//         console.log('API Response:', response.data); // Log the API response
//         setNobelPrizes(response.data.prizes);
//         setFilteredPrizes(response.data.prizes);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       });
//   }, []);

//   const handleCategoryClick = (category) => {
//     const filtered = nobelPrizes.filter(prize => 
//       prize.category === category && (!selectedYear || prize.year === selectedYear)
//     );
//     setFilteredPrizes(filtered);
//     setSelectedCategory(category);
//   };

//   const handleYearChange = (year) => {
//     const filtered = nobelPrizes.filter(prize => 
//       (!selectedCategory || prize.category === selectedCategory) && (!year || prize.year === year)
//     );
//     setFilteredPrizes(filtered);
//     setSelectedYear(year);
//   };

//   if (loading) {
//     return <div>Loading...</div>; // or any loading indicator you prefer
//   }

//   const currentYear = new Date().getFullYear();
//   const startYear = 1901;

//   return (
//     <div className='bg-[#ffffff] overflow-visible w-full h-auto min-h-[850px] flex flex-col items-center justify-center'>
//       <div className='font-abril text-[40px] mt-8 mb-10 text-[#333333]'>
//         Nobel Winners
//       </div>

//       <div className='flex items-center space-x-4 mb-4 mr-[80%]'>
//         <label htmlFor='yearFilter' className='font-zilla-slab text-lg'>Filter by Year:</label>
//         <select
//           id='yearFilter'
//           className='w-32 h-10 border border-gray-400 rounded-lg p-2 focus:outline-none'
//           value={selectedYear}
//           onChange={(e) => handleYearChange(e.target.value)}
//         >
//           <option value=''>All</option>
//           {Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i).map(year => (
//             <option key={year} value={year}>
//               {year}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className='grid grid-cols-4 grid-rows-4 gap-4 font-abril mx-4'>
//         {filteredPrizes.map((prize, index) => (
//           <div key={index} className='w-auto h-48 px-20 py-32 bg-[#ebebeb] text-[#333333] rounded-xl'>
//             <div className='text-lg font-abril -mt-16'>{prize.year}</div>
//             <div className='font-zilla-slab text-base mt-2'>{prize.category}</div>
//             {prize.laureates && prize.laureates.map((laureate, innerIndex) => (
//               <div key={`${index}-${innerIndex}`} className='font-abril text-base mt-2'>
//                 {laureate.firstname} {laureate.surname}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Winners;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import logo1 from '/logo2.png';

// const Winners = () => {
//   const [nobelPrizes, setNobelPrizes] = useState([]);
//   const [filteredPrizes, setFilteredPrizes] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedYear, setSelectedYear] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get('https://api.nobelprize.org/v1/prize.json')
//       .then(response => {
//         console.log('API Response:', response.data); 
//         setNobelPrizes(response.data.prizes);
//         setFilteredPrizes(response.data.prizes);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       });
//   }, []);

//   const handleCategoryClick = (category) => {
//     const filtered = nobelPrizes.filter(prize => 
//       prize.category === category && (!selectedYear || prize.year === selectedYear)
//     );
//     setFilteredPrizes(filtered);
//     setSelectedCategory(category);
//   };

//   const handleYearChange = (year) => {
//     const filtered = nobelPrizes.filter(prize => 
//       (!selectedCategory || prize.category === selectedCategory) && (!year || prize.year === year)
//     );
//     setFilteredPrizes(filtered);
//     setSelectedYear(year);
//   };

//   if (loading) {
//     return <div>
  //     <div id="loader" className="fixed inset-0 flex items-center justify-center bg-[#cacaca] z-50">
  //   <div className="flex items-center">
  //     <h2 className="text-2xl text-[#343434] font-semibold mr-2">Hang on,</h2>
  //     <h2 className="text-2xl text-[#343434] font-semibold mr-2">Looking for new winners</h2>
  //     <div className="flex dot-animation">
  //       <div className="dot dot-1"></div>
  //       <div className="dot dot-2"></div>
  //       <div className="dot dot-3"></div>
  //     </div>
  //   </div>
  // </div>
//   </div>; // or any loading indicator you prefer
//   }

//   const currentYear = new Date().getFullYear();
//   const startYear = 1901;

//   return (
//     <div className=' bg-[#F5F3F5] overflow-visible w-full h-auto min-h-[850px] flex flex-col items-center justify-center'>
//       <div className='w-full flex items-center justify-between p-4'>
//         <Link to='/' className='flex items-center'>
//           <img src={logo1} alt='Logo' className='w-14 ml-2 rounded-[50%] h-auto' />
//         </Link>
//       </div>
//       <div className='font-abril text-[40px] -mt-16 mb-10 text-[#333333]'>
//           Nobel Winners
//       </div>

//       <div className='flex items-center space-x-4 mb-4 mr-[80%]'>
//         <label htmlFor='yearFilter' className='font-zilla-slab text-lg'>Filter by Year:</label>
//         <select
//           id='yearFilter'
//           className='w-32 h-10 border-none border-gray-400 bg-[#dcdcdc] text-[#333333] rounded-lg p-2 focus:outline-none'
//           value={selectedYear}
//           onChange={(e) => handleYearChange(e.target.value)}
//         >
//           <option value=''>All</option>
//           {Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i).map(year => (
//             <option key={year} value={year}>
//               {year}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className='grid grid-cols-4 grid-rows-4 gap-4 font-abril  mx-4'>
//         {filteredPrizes.map((prize, index) => (
//           <div key={index} className='flex flex-col items-center justify-center shadow-lg w-auto h-48 px-20 py-32 bg-[#dcdcdc] text-[#333333] rounded-xl'>
//             <div className='text-lg font-abril -mt-16'>{prize.year}</div>
//             <div className='font-zilla-slab text-base mt-2'>{prize.category}</div>
//             {prize.laureates && prize.laureates.map((laureate, innerIndex) => (
//               <div key={`${index}-${innerIndex}`} className='font-abril text-base mt-2'>
//                 {laureate.firstname} {laureate.surname}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Winners;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo1 from '/logo2.png';

const Winners = () => {
  const [nobelPrizes, setNobelPrizes] = useState([]);
  const [filteredPrizes, setFilteredPrizes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedWinner, setSelectedWinner] = useState(null); // State for selected winner
  const [clickedBox, setClickedBox] = useState(null); 

  useEffect(() => {
    axios.get('https://api.nobelprize.org/v1/prize.json')
      .then(response => {
        console.log('API Response:', response.data); 
        setNobelPrizes(response.data.prizes);
        setFilteredPrizes(response.data.prizes);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleCategoryClick = (category) => {
    const filtered = nobelPrizes.filter(prize => 
      prize.category === category && (!selectedYear || prize.year === selectedYear)
    );
    setFilteredPrizes(filtered);
    setSelectedCategory(category);
  };

  const handleYearChange = (year) => {
    const filtered = nobelPrizes.filter(prize => 
      (!selectedCategory || prize.category === selectedCategory) && (!year || prize.year === year)
    );
    setFilteredPrizes(filtered);
    setSelectedYear(year);
  };

  const handleBoxClick = (prize, index) => {
    setSelectedWinner(prize); // Set selected winner's details
    setClickedBox(index);
  };

  const handleCloseModal = () => {
    setSelectedWinner(null); // Close the modal
    setClickedBox(null);
  };

  if (loading) {
    return <div>
        <div id="loader" className="fixed inset-0 flex items-center justify-center bg-[#cacaca] z-50">
    <div className="flex items-center">
      <h2 className="text-2xl text-[#343434] font-semibold mr-2">Hang on,</h2>
      <h2 className="text-2xl text-[#343434] font-semibold mr-2">Looking for new winners</h2>
      <div className="flex dot-animation">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
      </div>
    </div>
  </div>
    </div>;
  }

  const currentYear = new Date().getFullYear();
  const startYear = 1901;

  return (
    <div className='bg-[#F5F3F5] overflow-visible w-full h-auto min-h-[850px] flex flex-col items-center justify-center'>
      <div className='w-full flex items-center justify-between p-4'>
        <Link to='/' className='flex items-center'>
          <img src={logo1} alt='Logo' className='w-14 ml-2 rounded-[50%] h-auto' />
        </Link>
      </div>
      <div className=' font-abril text-[40px] -mt-16 mb-10 text-[#333333]'>
          Nobel Winners
      </div>

      <div className='flex items-center space-x-4 mb-4 mr-[80%]'>
        <label htmlFor='yearFilter' className='font-zilla-slab text-lg'>Filter by Year:</label>
        <select
          id='yearFilter'
          className='w-32 h-10 border-2 bg-transparent border-[#443c68] text-[#333333] rounded-lg p-2 focus:outline-none'
          value={selectedYear}
          onChange={(e) => handleYearChange(e.target.value)}
        >
          <option value=''>All</option>
          {Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i).map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className='grid grid-cols-4 grid-rows-4 gap-4 font-abril mx-4'>
        {filteredPrizes.map((prize, index) => (
          // <div
          //   key={index}
          //   className='flex flex-col items-center justify-center shadow-lg w-auto h-48 px-20 py-32 bg-[#dcdcdc] text-[#333333] rounded-xl cursor-pointer'
          //   onClick={() => handleBoxClick(prize)}
          // >
          <div
            key={index}
            className={`transition-transform duration-300 transform hover:scale-95 ease-in-out flex flex-col items-center justify-center shadow-lg w-auto h-48 px-20 py-32 bg-[#443c68] text-[#ffffff] rounded-xl cursor-pointer ${
              clickedBox === index ? 'scale-75 ' : ''
            }`}
            onClick={() => handleBoxClick(prize, index)}
          >
            <div className='text-lg font-abril -mt-16'>{prize.year}</div>
            <div className='font-zilla-slab text-base mt-2'>{prize.category}</div>
            {prize.laureates && prize.laureates.map((laureate, innerIndex) => (
              <div key={`${index}-${innerIndex}`} className='font-abril text-base mt-2'>
                {laureate.firstname} {laureate.surname}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Modal for displaying winner details */}
      {selectedWinner && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='flex flex-col items-center justify-center shadow-lg w-auto h-auto px-20 py-16 bg-[#dcdcdc] text-[#333333] rounded-xl'>
            <h2 className='text-xl font-abril mb-4'>Winner Details</h2>
            {selectedWinner.laureates.map(laureate => (
              <div key={laureate.id} className='mb-4'>
                <h3 className='text-lg font-abril mb-1'>{laureate.firstname} {laureate.surname}</h3>
                <p className='font-zilla-slab' ><strong>Motivation:</strong> {laureate.motivation}</p>
                <p className='font-zilla-slab mb-2'><strong>Share:</strong> {laureate.share}</p>
              </div>
            ))}
            <button onClick={handleCloseModal} className='mt-4 w-24 bg-[#333333] text-white font-zilla-slab font-normal 
      py-2 px-4 rounded-lg transition-transform duration-300 transform hover:scale-95 ease-in-out hover:bg-[#443c68] hover:text-[#ffffff]'>
        Close
      </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Winners;
