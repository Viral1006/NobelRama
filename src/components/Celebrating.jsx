import React from 'react';

const Celebrating = () => {
  return (
    <div className='bg-[#101010] w-full h-auto flex flex-row smmax:flex-col items-center justify-center py-20'>
      <div className='w-1/2 text-left smmax:w-full sm:ml-40 smmax:text-left p-4'>
        <div className='font-abril text-4xl text-[#ffffff]'>
          Celebrating 100 Years
        </div>
        <div className='font-zilla-slab text-xl text-white mt-4'>
          Join us in honoring the phenomenal<br /> 
          achievements of Nobel Prize Winners from the<br /> 
          last 100 years. Discover the trailblazers who<br /> 
          revolutionized our world, defying all boundaries.
        </div>
      </div>
      <div className='w-1/2 smmax:w-auto mt-10 smmax:mt-0 flex justify-center'>
        <img src="https://im.indiatimes.in/content/2023/Oct/nobel-prize_651bab0519b19.jpg" 
          alt="headerimage" className="h-72 w-80 rounded-lg" />
      </div>
    </div>
  );
}

export default Celebrating;

