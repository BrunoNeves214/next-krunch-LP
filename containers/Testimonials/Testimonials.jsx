'use client';
import { useState } from 'react';
import {Slider} from '../../components'
import {TfiAngleLeft, TfiAngleRight} from 'react-icons/tfi'
import {RxDotFilled} from 'react-icons/rx'

const Testimonials = () => {

  const sliderText = [
    {
      p: <Slider phrase={'It really saves me time and effort. web design is exactly what our business has been lacking. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem risus tristique posuere.'} member={'Walter White'}/>
    },
    {
      p: <Slider phrase={'Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem risus tristique posuere. It really saves me time and effort. web design is exactly what our business has been lacking. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'} member={'Donald Duck'} />
    },
    {
      p: <Slider phrase={'Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. It really saves me time and effort. web design is exactly what our business has been lacking. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem risus tristique posuere.'} member={'Carl Jhonson'} />
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? sliderText.length-1 : currentIndex -1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === sliderText.length-1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="flex flex-col items-center gap-10 mb-32 text-white text-center py-20 testimonials relative">
      {/* title */}
      <h1 className="text-[2rem] uppercase">
        Testimonials
      </h1>

      {/* horizontal line */}
      <div className="border-b-2 border-solid border-white -mt-[15px] w-16"></div>

      {/* text slider */}
      <div className='px-32'>
        {sliderText[currentIndex].p}
      </div>

      {/* left/right arrows */}
      <div className='absolute top-0 flex justify-between items-center w-full h-full px-5 lg:px-10 xl:px-28'>
        {/* left */}
        <TfiAngleLeft color={'white'} className='bg-black/30 rounded-xl w-10 h-10 p-1 cursor-pointer' onClick={prevSlide}/>

        {/* right */}
        <TfiAngleRight color={'white'} className='bg-black/20 rounded-xl w-10 h-10 p-1 cursor-pointer' onClick={nextSlide}/>
      </div>
    </div>
  )
}

export default Testimonials