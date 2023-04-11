"use client";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-5 bg-stone-900 pt-5 pb-2 px-7 text-[0.9rem] uppercase font-bold text-center footer">
      {/* social media */}
      <div className="text-white flex gap-10 flex-wrap">
        <p className="cursor-pointer">facebook</p>
        <p className="cursor-pointer">twitter</p>
        <p className="cursor-pointer">instagram</p>
        <p className="cursor-pointer">google+</p>
      </div>

      {/* copyright */}
      <div className="text-gray-600">
        <p>
          © 2016 krunch landing page, designed by{" "}
          <a
            href="https://dribbble.com/ImShuvo"
            target="_blank"
            className="text-blue-500 cursor-pointer"
          >
            shuvo
          </a>{" "}
          & webflowed by{" "}
          <span className="text-blue-500 cursor-pointer">taimurian</span>
        </p>
        <p className="mt-5">
          cloned by{" "}
          <span className="text-blue-500 cursor-pointer">bruno neves</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
