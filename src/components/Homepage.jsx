import React from 'react'

const Homepage = () => {
  return (
    <div className='bg-[#443c68] overflow-visible w-full h-[100vh] min-h-[600px] flex flex-col items-center justify-center'>
        <div className='font-abril text-9xl mt-20 text-white '>
            NOBELRAMA
        </div>
        <div className='font-zilla-slab text-xl text-white text-center mt-4 p-10'>
            Welcome to NobelRama - the ultimate hub of <br/> knowledge on Nobel Prize Winners! 
            Unveil the<br/> brilliant minds that transformed the world in the<br/> last century.
        </div>
        <button className='mt-4 bg-white text-[#635985] font-zilla-slab font-normal py-2 px-4 rounded-lg transition-transform duration-300 transform hover:scale-110 '>
            Meet the Laureates
        </button>
        {/* <img src="https://im.indiatimes.in/content/2023/Oct/nobel-prize_651bab0519b19.jpg" alt="headerimage" className="mt-20 mb-20 h-[500px] w-[60%] rounded-lg" /> */}
    </div>
  )
}

export default Homepage