import React from 'react'

const Lucky = () => {
  return (
    <div className='bg-[#ffffff] overflow-visible w-full h-auto min-h-[850px] mb-10 flex flex-col items-center justify-center'>
        <div className='font-abril text-[40px] smmax:text-[32px] mt-8 text-[#890620] '>
            Lucky four
        </div>
        <div className='font-zilla-slab text-xl smmax:text-[18px] text-[#890620] text-center mt-1 pb-10 pt-5'>
        Get inspired by these four exceptional human beings who have won<br/> the Nobel Prize multiple times! Let their incredible stories captivate<br/> your curiosity.
        </div>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 smmax:grid-cols-1 smmax:grid-rows-1 smmax:gap-4 font-abril'>
            <div className='w-auto h-40 p-32 smmax:p-24 text-center bg-[#f2f2f2] rounded-xl'>
            <img src="https://sciencehistory.org/wp-content/uploads/2023/04/bio-curie-640x500.jpg" 
            alt="headerimage" className=" -mt-20 mb-8 h-24 w-24 smmax:h-20 smmax:w-20 rounded-full mx-auto" />
                {/* <div className=' items-center justify-center w-10 h-10 bg-black rounded-full '></div> */}
                Marie Curie
                <div className='font-zilla-slab text-center text-sm mt-2' >Won Twice</div>
            </div>

            <div className='w-auto h-40 p-32 smmax:p-24 text-center bg-[#f2f2f2] rounded-xl'>
            <img src="https://www.nobelprize.org/images/pauling-13095-portrait-medium.jpg" 
            alt="headerimage" className=" -mt-20 mb-8 h-24 w-24 smmax:h-20 smmax:w-20 rounded-full mx-auto" />
                Linus Pauling
                <div className='font-zilla-slab text-sm mt-2' >Won Twice</div>
            </div>

            <div className='w-auto h-40 p-32 smmax:p-24 text-center bg-[#f2f2f2] rounded-xl'>
            <img src="https://distributedmuseum.illinois.edu/wp-content/uploads/2018/03/img_1513198907674_John-Bardeen---0003507.jpg" 
            alt="headerimage" className=" -mt-20 mb-8 h-24 w-24 smmax:h-20 smmax:w-20 rounded-full mx-auto" />
                John Bardeen
                <div className='font-zilla-slab text-sm mt-2' >Won Twice</div>
            </div>

            <div className='w-auto h-40 p-32 smmax:p-24 text-center bg-[#f2f2f2] rounded-xl'>
            <img src="https://d2cbg94ubxgsnp.cloudfront.net/Pictures/480xAny/5/7/2/127572_feature-sanger1-250_tcm18-42175.jpg" 
            alt="headerimage" className=" -mt-20 mb-8 h-24 w-24 smmax:h-20 smmax:w-20 rounded-full mx-auto" />
                Fredrick Sanger
                <div className='font-zilla-slab text-sm mt-2' >Won Twice</div>
            </div>
        </div>
    </div>
  )
}

export default Lucky