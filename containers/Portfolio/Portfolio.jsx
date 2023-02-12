'use client';

import { Title, Work } from "@/components";

const Portfolio = () => {
  return (
    <div className="flex flex-col mb-32 text-center  gap-10" id="portfolio">
      {/* title */}
      <Title title={'portfolio'} phrase={'An eye for detail makes our work beautiful'} />

      {/* portofolio cases */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center col-auto">
        <Work src={'/portfolio01.jpeg'} alt={'portfolio'} cat={'graphic design'} />
        <Work src={'/portfolio02.jpeg'} alt={'portfolio'} cat={'print design'} />
        <Work src={'/portfolio03.jpg'} alt={'portfolio'} cat={'mobile apps'} />
        <Work src={'/portfolio04.jpeg'} alt={'portfolio'} cat={'3d drawing'} />
        <Work src={'/portfolio05.jpg'} alt={'portfolio'} cat={'interior design'} />
        <Work src={'/portfolio06.jpeg'} alt={'portfolio'} cat={'web design'} />
        <Work src={'/portfolio07.jpeg'} alt={'portfolio'} cat={'office design'} />
        <Work src={'/portfolio08.jpeg'} alt={'portfolio'} cat={'home design'} />
      </div>

      {/* portoflio contact */}
      <div>
        <p className="text-[1.4rem] italic mb-10">
          Have a Project in Mind?
        </p>

        <button className="border-blue-500 hover:bg-blue-500 hover:text-white">contact now</button>
      </div>
    </div>
  )
}

export default Portfolio