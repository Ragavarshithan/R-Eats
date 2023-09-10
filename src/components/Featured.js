import React,{useState,useEffect} from 'react'
import { BsChevronCompactLeft,BsChevronCompactRight } from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Featured = () => {
    const sliders = [
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
          },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
          },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
          },
    ]
    const[currentIndex,setCurrentIndex] = useState(0)
    const preSlider = ()=>{
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? sliders.length-1 : currentIndex - 1
        setCurrentIndex(newIndex) 
    }

    const  nextSlider = ()=>{
      const isLastSlide = currentIndex === sliders.length - 1
      const newIndex = isLastSlide ? 0: currentIndex + 1
      setCurrentIndex(newIndex) 
    }

    const moveToSlide = (slideIndex) =>{
      setCurrentIndex(slideIndex)
    }

    useEffect(() => {
      const interval = 5000; // Change this to adjust the auto slide interval (e.g., 5 seconds)

      // Function to go to the next slide
      const autoSlideFunction = () => {
          const isLastSlide = currentIndex === sliders.length - 1;
          const newIndex = isLastSlide ? 0 : currentIndex + 1;
          setCurrentIndex(newIndex);
      };

      const autoSlideTimer = setInterval(autoSlideFunction, interval);

      // Clear the timer when the component unmounts
      return () => {
          clearInterval(autoSlideTimer);
      };
  }, [currentIndex]);
    
  return (
    <div className='max-w-[1540px] h-[500px] w-full m-auto py-3 px-3 relative group '>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-300'
         style={{backgroundImage: `url(${sliders[currentIndex].url})`}}></div>
         <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-3xl rounded-full p-2 text-white cursor-pointer bg-orange-700'>
            <BsChevronCompactLeft onClick={preSlider} />
         </div>
         <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-3xl rounded-full p-2 text-white cursor-pointer bg-orange-700'>
            <BsChevronCompactRight onClick={nextSlider}/>
         </div>
         <div className='flex top-4 justify-center py-2'>
          {
            sliders.map((sliderItems,SlideIndex)=>(
              <div
              key={SlideIndex}
              onClick={()=>moveToSlide(SlideIndex)}
              className='text-2xl cursor-pointer'>
                  <RxDotFilled/>
              </div>
            ))
          }
         </div>
    </div>
  )
}

export default Featured