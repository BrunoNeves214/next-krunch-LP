'use client';
import {MdOutlineDesktopMac} from 'react-icons/md'

const Service = ({icon, title, phrase}) => {
  return (
    <div>
      {/* icon */}
      <div>
        {icon}
      </div>

      {/* title */}
      <h1 className='text-[1.3rem] font-semibold uppercase my-4'>{title}</h1>

      {/* phrase */}
      <p className='text-gray-600'>{phrase}</p>
    </div>
  )
}

export default Service