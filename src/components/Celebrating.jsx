// import React from 'react'

// const Celebrating = () => {
//   return ( 
//     <div className='bg-[#101010] overflow-visible w-full h-[60vh] smmax:h-screen flex flex-col md:flex-row items-start justify-center'>
//         <div className='md:w-1/2 text-left md:pl-32 smmax:pl-10 smmax:py-8 sm:mt-20 sm:py-32'>
//             <div className='font-abril text-4xl smmax:mt-16 smmax:mb-4 text-[#ffffff]'>
//                 Celebrating 100 Years
//             </div>
//             <div className='font-zilla-slab text-xl text-white smmax:mr-20 smmax:mx-auto sm:mt-4'>
//                 Join us in honoring the phenomenal<br/> 
//                 achievements of Nobel Prize Winners from the<br/> 
//                 last 100 years. Discover the trailblazers who<br/> 
//                 revolutionized our world, defying all boundaries.
//             </div>
//         </div>
//         <div className='md:w-1/2 smmax:ml-14 smmax:mb-28'>
//             <img src="https://im.indiatimes.in/content/2023/Oct/nobel-prize_651bab0519b19.jpg" 
//             alt="headerimage" className="mt-20 sm:mb-20 h-72 w-80 smmax:h-56 smmax:w-60 rounded-lg mx-auto" />
//         </div>
//     </div>
//   )
// }

// export default Celebrating

// import React from 'react'

// const Celebrating = () => {
//   return ( 
//     <div className='bg-[#101010] overflow-visible w-full h-[60vh] flex flex-col smmax:flex-row items-start justify-center'>
//         <div className='w-1/2  grid grid-cols-2 grid-rows-2 gap-4 text-left pl-48'>
//             <div className='font-abril text-4xl text-[#ffffff]'>
//                 Celebrating 100 Years
//             </div>
//             <div className='font-zilla-slab text-xl text-white mt-4'>
//                 Join us in honoring the phenomenal<br/> 
//                 achievements of Nobel Prize Winners from the<br/> 
//                 last 100 years. Discover the trailblazers who<br/> 
//                 revolutionized our world, defying all boundaries.
//             </div>
//         </div>
//         <div className='w-1/2 grid grid-cols-2 grid-rows-2 gap-4'>
//             <img src="https://im.indiatimes.in/content/2023/Oct/nobel-prize_651bab0519b19.jpg" 
//             alt="headerimage" className="mt-20 mb-20 h-72 w-80 rounded-lg mx-auto" />
//         </div>
//     </div>
//   )
// }

// export default Celebrating

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

