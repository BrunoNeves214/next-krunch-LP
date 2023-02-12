'use client';

const Work = ({src, alt, cat}) => {
  return (
    <div className="relative">
      <img src={src} alt={alt} className='w-full'/>
      <div className="absolute top-0 flex justify-center items-center w-full h-full bg-blue-500 bg-opacity-0 hover:bg-opacity-80 ease-in duration-200 work-img">
        <p className="text-white uppercase text-[1.3rem] font-bold drop-shadow relative top-5 opacity-0 ease-in duration-200
          ">{cat}</p>
      </div>
    </div>
  )
}

export default Work