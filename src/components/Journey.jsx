import React from 'react'

const Journey = () => {
  return ( 
    <div className='bg-[#EBD4CB] overflow-visible w-full h-[60vh] flex flex-col items-start justify-center'>
      <div className='font-abril text-[40px] text-left flex-col-start ml-48 text-[#101010] mt-4'>
        Embark on a journey through time and witness<br/>  the lives of these 
        incredible laureates. Filter by<br/>  categories and years to immerse yourself in a coveted<br/>  universe of  
        wisdom!
      </div>
      <div className='flex ml-48 mt-4'>
        <button className='mr-4 bg-[#2c0703] text-white font-zilla-slab font-normal py-2 px-4 rounded-lg transition-transform duration-300 transform hover:scale-110'>
          Explore Winners
        </button>
        <button className='bg-[#890620] text-white font-zilla-slab font-normal py-2 px-4 rounded-lg transition-transform duration-300 transform hover:scale-110'>
          Filter Results
        </button>
      </div>
    </div>
  )
}

export default Journey