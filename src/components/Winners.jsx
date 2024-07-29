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

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Winners = () => {
  const [nobelPrizes, setNobelPrizes] = useState([]);
  const [filteredPrizes, setFilteredPrizes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.nobelprize.org/v1/prize.json')
      .then(response => {
        console.log('API Response:', response.data); // Log the API response
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

  if (loading) {
    return <div>Loading...</div>; // or any loading indicator you prefer
  }

  const currentYear = new Date().getFullYear();
  const startYear = 1901;

  return (
    <div className='bg-[#ffffff] overflow-visible w-full h-auto min-h-[850px] flex flex-col items-center justify-center'>
      <div className='font-abril text-[40px] mt-8 mb-10 text-[#333333]'>
        Nobel Winners
      </div>

      <div className='flex items-center space-x-4 mb-4 mr-[80%]'>
        <label htmlFor='yearFilter' className='font-zilla-slab text-lg'>Filter by Year:</label>
        <select
          id='yearFilter'
          className='w-32 h-10 border border-gray-400 rounded-lg p-2 focus:outline-none'
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
          <div key={index} className='w-auto h-48 px-20 py-32 bg-[#ebebeb] text-[#333333] rounded-xl'>
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
    </div>
  );
};

export default Winners;
