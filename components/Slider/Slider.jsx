"use client";

const Slider = ({ phrase, member }) => {
  return (
    <div className="text-center">
      <p className="text-[1.2rem] min-w-[450px] sm:max-w-5xl italic mb-5">
        {phrase}
      </p>

      <p className="text-[1.2rem] text-blue-500 font-bold uppercase">
        {member}
      </p>
    </div>
  );
};

export default Slider;
