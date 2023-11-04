import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Categories = () => {
  const categories = [
    'Physics',
    'Chemistry',
    'Literature',
    'Medicine',
    'Peace',
    'Economics' // Add more categories if needed
  ];

  return (
    <div className='bg-[#ffffff] overflow-visible w-full h-[50vh] flex flex-col items-start justify-center'>
      {/* {categories.map((category, index) => (
        <div key={index} className='flex items-center justify-between text-left pl-48 py-2 w-full'>
          <span className='mr-2 text-lg font-zilla-slab '>{category}</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      ))} */}
      <div className='flex items-center justify-between text-left pl-48 py-2 w-full '>
            <span className='mr-2 font-zilla-slab text-xl'>1900-2000</span>
            <span className='mr-96 font-zilla-slab text-xl'>Physics</span>
            <FontAwesomeIcon icon={faArrowRight} className='mr-72'  />
        </div>
        <div className='w-[70%] ml-48 mt-2 h-[0.5px] bg-[#b4b4b4]'></div>

        <div className='flex items-center justify-between text-left pl-48 py-2 w-full'>
            <span className='mr-2 font-zilla-slab text-xl'>1900-2000</span>
            <span className='mr-96 font-zilla-slab text-xl'>Chemistry</span>
            <FontAwesomeIcon icon={faArrowRight} className='mr-72' />
        </div>
        <div className='w-[70%] ml-48 mt-2 h-[0.5px] bg-[#b4b4b4]'></div>

        <div className='flex items-center justify-between text-left pl-48 py-2 w-full'>
            <span className='mr-2 font-zilla-slab text-xl'>1900-2000</span>
            <span className='mr-96 font-zilla-slab text-xl'>Literature</span>
            <FontAwesomeIcon icon={faArrowRight} className='mr-72' />
        </div>
        <div className='w-[70%] ml-48 mt-2 h-[0.5px] bg-[#b4b4b4]'></div>

        <div className='flex items-center justify-between text-left pl-48 py-2 w-full'>
            <span className='mr-2 font-zilla-slab text-xl'>1900-2000</span>
            <span className='mr-96 font-zilla-slab text-xl'>Medicine</span>
            <FontAwesomeIcon icon={faArrowRight} className='mr-72' />
        </div>
        <div className='w-[70%] ml-48 mt-2 h-[0.5px] bg-[#b4b4b4]'></div>

        <div className='flex items-center justify-between text-left pl-48 py-2 w-full'>
        <span className='mr-2 font-zilla-slab text-xl'>1900-2000</span>
            <span className='mr-96 font-zilla-slab text-xl'>Peace</span>
            <FontAwesomeIcon icon={faArrowRight} className='mr-72' />
        </div>
    </div>
  );
}

export default Categories;
