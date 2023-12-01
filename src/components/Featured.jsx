import React, { useState } from 'react'
import { BsChevronCompactLeft,BsChevronCompactRight } from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Featured = () => {
  const sliders = [
      {
          url: 'https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/intro-1662064407.jpg'
      },
      {
          url: 'https://www.archanaskitchen.com/images/archanaskitchen/0-Affiliate-Articles/Recipe_Collection/Protein_rich_appetizers.jpg'
      },
      {
          url: 'https://www.vvsupremo.com/wp-content/uploads/2016/02/900X570_Mexican-Style-Hot-Dogs.jpg'
      }

  ]
 
  const [currentIndex, setCurrentIndex] = useState(0)

  // for sliding onto the previous image slide
  const prevSlider = () => {
    const isFirstSlide = currentIndex == 0
    const newIndex = isFirstSlide ? sliders.length -1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  // for sliding onto the next image slide
  const nextSlider = () => {
    const isLastSlide = currentIndex == sliders.length -1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  // for sliding between images using the dot icons RxDotFilled
  const moveToNextSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className='max-w-[1520px] h-[400px] w-full py-4 px-4 relative group'>

      {/* displaying images from the sliders array */}
      <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style = {{backgroundImage: `url(${sliders[currentIndex].url})`}}
      ></div>  

      {/* the previous, next and dot slider movements */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlider} />
      </div> 
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlider} />
      </div> 

      <div className='flex top-4 justify-center py-2'>
        {
          sliders.map((sliderItems, slideIndex) => (
            <div 
            key={slideIndex}
            onClick={()=> moveToNextSlide(slideIndex)}
            className='text-2xl cursor-pointer'>
              <RxDotFilled />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Featured
