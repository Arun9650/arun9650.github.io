import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/image.module.css'
import Image from 'next/image'
export default function Award() {
  return (
    <div>
        <Navbar/>

        <section className="text-gray-600 body-font">
  <div className="container max-w-[1200px] mx-auto flex px-5 h-screen py-10 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full h-[90vh] md:w-1/2 overflow-hidden  w-5/6 mb-10 md:mb-0">
    <div className="hover-fold">
  <div className="top">
    <div className="front face  ">
        <Image src="/image2.jpeg" alt="" widht={1000} height={1000} />
    </div>
    <div className="back face">
      <p>I designed this shirt for my friend&apos;s band &quot;2 or More&quot;. I was really excited to play with the transparencies in the ink. I thought it would be fun, but the screen printer didn&rsquo;  t.</p>
    </div>
  </div>
  
  <div className="bottom">
    {/* <img src="/Award.jpeg" alt="" /> */}
  </div>
  
</div>

    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className=" sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Excellence in Sport
        <br />
        <span className="text-md font-Bree">Sunil kumar</span> 
      </h1>
      <p className="mb-8 leading-relaxed">Sport Day hosted by RamaJas Collage  our student MR.Sunil Kumar 
        was successfully win the prize
      .</p>
   
    </div>
  </div>
</section>

    </div>
  )
}
