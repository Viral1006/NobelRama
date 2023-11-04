import React from 'react'

const Celebrating = () => {
  return ( 
    <div className='bg-[#101010] overflow-visible w-full h-[60vh] flex flex-col md:flex-row items-start justify-center'>
        <div className='md:w-1/2 text-left pl-48 py-32'>
            <div className='font-abril text-4xl text-[#EBD4CB]'>
                Celebrating 100 Years
            </div>
            <div className='font-zilla-slab text-xl text-zinc-100 mt-4'>
                Join us in honoring the phenomenal<br/> 
                achievements of Nobel Prize Winners from the<br/> 
                last 100 years. Discover the trailblazers who<br/> 
                revolutionized our world, defying all boundaries.
            </div>
        </div>
        <div className='md:w-1/2'>
            <img src="https://im.indiatimes.in/content/2023/Oct/nobel-prize_651bab0519b19.jpg" 
            alt="headerimage" className="mt-20 mb-20 h-72 w-80 rounded-lg mx-auto" />
        </div>
    </div>
  )
}

export default Celebrating