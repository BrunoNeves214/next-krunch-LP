'use client';

import {FaFacebookF, FaTwitter, FaLinkedinIn} from 'react-icons/fa'

const Member = ({src, alt, member, job}) => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      {/* member img */}
      <div className='relative'>
        <img src={src} alt={alt} className='w-full'/>
        <div className='absolute top-0 bg-blue-500/0 hover:bg-blue-500/50 ease-in duration-200 w-full h-full flex justify-center items-center gap-3 text-white team-social'>
          <p className='p-3 bg-black relative top-10 ease-in duration-200 cursor-pointer opacity-0'><FaFacebookF /></p>
          <p className='p-3 bg-black relative top-10 ease-in duration-200 cursor-pointer opacity-0'><FaTwitter /></p>
          <p className='p-3 bg-black relative top-10 ease-in duration-200 cursor-pointer opacity-0'><FaLinkedinIn /></p>
        </div>
      </div>

      {/* member name */}
      <p className="text-[1.1rem] font-semibold uppercase">{member}</p>

      {/* member job */}
      <p className="capitalize text-gray-700">{job}</p>
    </div>
  )
}

export default Member