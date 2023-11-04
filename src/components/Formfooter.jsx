import React from 'react'
        
        const Formfooter = () => {
          return (
            <div className='bg-[#443c68] overflow-visible w-full h-auto min-h-[600px] flex flex-col items-center justify-center'>
                <div className='font-abril text-[40px] mt-4 text-[#ffffff] '>
                    Stay Updated
                </div>
                <div className='font-zilla-slab text-xl text-[#ffffff] text-center mt-1 pb-10 pt-5'>
                    Eager to know about the newest Nobel Prize Winners? Subscribe to<br /> 
                    our newsletter and keep yourself informed about the latest<br /> 
                    happenings in this prestigious echelon of achievers.
                </div>
                <div className='flex ml-6 mt-4'>
                    <input
                        type='email'
                        placeholder='name@email.com'
                        className='mr-4 bg-[#635985] text-[#000000] font-zilla-slab font-normal py-2 px-4 rounded-lg border border-none ::placeholder-black'
                    />
                    <button className='bg-[#000000] text-white font-zilla-slab font-normal py-2 px-4 rounded-lg transition-transform duration-300 transform hover:scale-110 hover:bg-[#333333] '>
                        Subscribe
                    </button>
            </div>
        </div>
          )
        }
        
        export default Formfooter