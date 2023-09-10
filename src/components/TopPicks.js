import React from 'react'
import '@splidejs/react-splide/css';
import '../data/data'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { topPicks } from '../data/data';

function TopPicks() {
  return (
    <div>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Top Picks</h1>
        <div className='md:flex sm:flex lg:flex max-w-[1520px] m-auto py-2 px-2'>
          <Splide options={{perPage:4,gap:"0.5rem",grag:'free',arrows: false,
         breakpoints: {
          768: {
            perPage: 2, // Display 2 items per page on screens with a width of 768px or smaller
          },
          480: {
            perPage: 1, // Display 1 item per page on screens with a width of 480px or smaller (e.g., mobile phones)
          },
        },  
        }}
          
          >
          {
            topPicks.map((item)=>{
              return(
                <SplideSlide key={item.id}>
                <div className='rounded-3xl relative '>
                  <div className='absolute w-full h-full bg-black/50 rounded-3xl sm:(text-lg mx-1) lg:(text-2xl mx-2)'>
                    <p className='px-2 pt-4 font-bold text-2xl text-white'>{item.title}</p>
                    <p className='px-2 text-white'>{item.price}</p>
                    <button className='border-dotted border-white text-white mx-2 absolute'>Add To Cart</button>
                  </div>
                  <img className='h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300 sm:(h-[150px] hover:scale-110) lg:(h-[250px] hover:scale-105)'referrerPolicy="no-referrer" src={item.img}
                  alt={item.title}/>
                </div>
                </SplideSlide>
              )
            })
          }
          </Splide>
        </div>
    </div>
  )
}

export default TopPicks