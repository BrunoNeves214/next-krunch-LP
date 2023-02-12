'use client';

const Title = ({title, phrase}) => {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <h1 className="text-[1.8rem] font-semibold uppercase">
        {title}
      </h1>
      <p className="text-[1.2rem] italic font-light">{phrase}</p>
      <div className="border-b-2 border-solid border-blue-500 w-20 mt-5">
      </div>
    </div>
  )
}

export default Title