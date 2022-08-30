import React from 'react'
import Image from 'next/image'
import img from '../public/Banner-Image.jpg'
import {FaArrowCircleRight} from 'react-icons/fa';


export default function hero() {

  return (
    
    <div className="relative   min-h-[80vh]  overflow-hidden">
        <div className="min-h-[90vh]
          bg-center bg-cover bg-no bg-no-repeat	
        border bg-[url(https://llcoindia.org/wp-content/uploads/2019/04/Banner-Image.jpg)] overflow-hidden">
    
</div>
      <div className="absolute top-0   z-0 bottom-0 right-0 left-0 bg-black bg-opacity-50"></div>
      <div className="absolute h-full flex items-center  pl-20 z-1 top-0 bottom-0 left-0">
        <div className="px-4 py-16 mx-auto flex items-center  mt-14  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center  justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 ">
              <div className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                
                <span className="text-teal-accent-400 mb-3">Great Future</span>
                <br/>
                <h2 className="text-teal-accent-400 text-orange-400  text-6xl mt-3">START HARE.</h2>
              </div>
              <p className="max-w-xl mb-4 text-base text-white md:text-lg">
              We start with children, mobilize entire communities into self-reliant action and foster effective partnerships.
              </p>
              
             <div className="max-w-xl flex ">
               <button className="    px-7 m-4 ml-0 py-3 font-semibold  flex  items-center bg-white text-black ">OUR  IMPACT    
               <FaArrowCircleRight className="text-base mt-1 ml-4"/>
               </button>
               <button className="    px-7 m-4 ml-0 py-3 font-semibold  flex  items-center bg-transparent border text-white ">DONATE NOW    
               <FaArrowCircleRight className="text-base mt-1 ml-4"/>
               </button>
             </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>


//     <div className="hero min-h-screen bg-[url('/Banner-Image.jpg')]">
//   <div className="hero-overlay bg-opacity-50"></div>
//   <div className="">
//     <div className="max-w-md">
//       <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
//       <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//       <button className="btn btn-primary">Get Started</button>
//     </div>
//   </div>
// </div>


  )
}
