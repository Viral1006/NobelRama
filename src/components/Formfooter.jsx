import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';

const Formfooter = () => {
  return (
    <div className='bg-[#443c68] overflow-visible w-full smmax:p-4 h-auto min-h-[600px] flex flex-col items-center justify-center'>
      <div className='font-abril text-[40px] smmax:text-[32px] mt-4 text-[#ffffff] '>
        Stay Updated
      </div>
      <div className='font-zilla-slab text-xl smmax:text-[18px] smmax:w-auto text-[#ffffff] text-center mt-1 pb-10 pt-5'>
        Eager to know about the newest Nobel Prize Winners? Subscribe to<br /> 
        our newsletter and keep yourself informed about the latest<br /> 
        happenings in this prestigious echelon of achievers.
      </div>
      <div className='flex flex-col items-center mt-4'>
        <div className='flex items-center mb-4'>
          <input
            type='email'
            placeholder='name@email.com'
            className='mr-4 bg-[#635985] text-[#000000] font-zilla-slab font-normal smmax:w-52 py-2 px-4 rounded-lg border border-none ::placeholder-black'
          />
          <button className='bg-[#000000] text-white font-zilla-slab font-normal py-2 px-4 rounded-lg transition-transform duration-300 transform hover:scale-110 hover:bg-[#333333]'>
            Subscribe
          </button>
        </div>
        <div className='flex items-center mt-20 mb-2'>
          <a href='https://github.com/Viral1006/' target='_blank' rel='noopener noreferrer' className='text-white mr-4'>
            <FaGithub size={30} />
          </a>
          <a href='https://www.linkedin.com/in/viral-parikh-710828215' target='_blank' rel='noopener noreferrer' className='text-white mr-4'>
            <FaLinkedin size={30} />
          </a>
          {/* <a href='mailto:parikh_viral@outlook.com' className='text-white ml-4'>
          <MdEmail size={30} />
        </a> */}
        </div>
        <div className='text-white text-sm mt-2'>
          © 2023 NobelRama. All Rights Reserved.
        </div>
        <div className='text-white text-sm mt-2'>
          Developed by Viral Parikh.
        </div>
      </div>
    </div>
  );
}

export default Formfooter;
