'use client';

import {FaLongArrowAltRight} from 'react-icons/fa'

const News = ({src, alt, title, date, phrase, read}) => {
  return (
    <div className="flex flex-col gap-3">
      {/* image */}
      <img src={src} alt={alt} className='w-full'
      />

      {/* title */}
      <p className='font-semibold text-[1.1rem]'>{title}</p>

      {/* date */}
      <p className='text-[0.9rem] text-gray-500 italic'>{date}</p>

      {/* phrase */}
      <p className='text-gray-700'>{phrase}</p>

      {/* read more */}
      <div className='flex items-center gap-1 text-blue-500 text-[0.9rem] font-bold'>
      <a href="#" className='uppercase'>{read} </a>
      <FaLongArrowAltRight />
      </div>
    </div>
  )
}

export default News