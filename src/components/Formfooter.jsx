import React from 'react'
        
        const Formfooter = () => {
          return (
            <div className='bg-[#ebd4cb] overflow-visible w-full h-auto min-h-[600px] flex flex-col items-center justify-center'>
                <div className='font-abril text-[40px] mt-4 text-[#890620] '>
                    Stay Updated
                </div>
                <div className='font-zilla-slab text-xl text-[#890620] text-center mt-1 pb-10 pt-5'>
                    Eager to know about the newest Nobel Prize Winners? Subscribe to<br /> 
                    our newsletter and keep yourself informed about the latest<br /> 
                    happenings in this prestigious echelon of achievers.
                </div>
                <div className='flex ml-6 mt-4'>
                    <input
                        type='email'
                        placeholder='name@email.com'
                        className='mr-4 bg-[#D6A694] text-[#000000] font-zilla-slab font-normal py-2 px-4 rounded-lg border border-none ::placeholder-black'
                    />
                    <button className='bg-[#890620] text-white font-zilla-slab font-normal py-2 px-4 rounded-lg transition-transform duration-300 transform hover:scale-110 hover:bg-[#2c0703] '>
                        Subscribe
                    </button>
            </div>
        </div>
          )
        }
        
        export default Formfooter