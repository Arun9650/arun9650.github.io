import React from 'react'
import Image from 'next/image'
export default function footer() {
  return (
    <div className="flex items-center justify-center w-full">

<footer className="text-gray-600 body-font w-full  bg-[#462f2e]">


  <div className="container px-5 w-fit py-16 mx-auto flex justify-center  items-center md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">



    <div className="w-64 mx-20 flex-shrink-0 md:mx-0   text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <Image src="/logo.svg" alt="logo" className="w-20 h-20 bg-white rounded-full" width={100} height={100} />
        <span className="ml-3 text-white text-xl">Pragati social welfere Trust </span>
      </a>
      <p className="mt-2 text-sm  text-white">Pragati Soical welfere trust is a organization which help blind poeple to build there dream by providing them a house, food, education, so where everybody has a fare chance</p>
    </div>





    <div className="flex-grow  justify-center flex flex-wrap  md:text-left text-center">
      <div className="lg:w-80  md:w-1/2  px-4">
        <h2 className="font-Bree font-bold  text-white  tracking-widest text-sm mb-3">ABOUT CHARITY</h2>
        <nav className="list-none grid grid-cols-1 divide-y mb-10">
          <li>
            <div className="text-white  cursor-pointer pb-2     hover:text-gray-300">The Problems</div>
          </li>
          <li>
            <div className="text-white py-2  cursor-pointer hover:text-gray-300">Financials</div>
          </li>
          <li>
            <div className="text-white py-2 cursor-pointer hover:text-gray-300">Our Story</div>
          </li>
          <li>
            <div className="text-white py-2   cursor-pointer hover:text-gray-300">Resources</div>
            <div className="w-full h-[1px] bg-white"></div>
          </li>
        </nav>
      </div>
      <div className="lg:w-80  md:w-1/2  px-4">
        <h2 className="font-Bree  font-bold uppercase text-white cursor-pointer tracking-widest text-sm mb-3">More About Us</h2>
        <nav className="list-none grid grid-col-1 divide-y  mb-10">
          <li>
            <div className="text-white pb-2 hover:text-gray-400">Our Blog </div>
          </li>
          <li>
            <div className="text-white py-2 hover:text-gray-400">Watch our media </div>
          </li>
          <li>
            <div className="text-white py-2 hover:text-gray-400">Contact and Help </div>
          </li>
          <li>
            <div className="text-white py-2 hover:text-gray-400">Donate</div>
            <div className="w-full h-[1px] bg-white"></div>
          </li>
        </nav>
      </div>
      <div className="lg:w-80  md:w-1/2  px-4">
        <h2 className="font-Op  font-bold uppercase text-white cursor-pointer tracking-widest text-sm mb-3"> React  to Us</h2>
        <nav className="list-none   mb-10">
          <li>
            <div className="text-white ">9971608252</div>
          </li>
          <li>
            <div className="text-white ">pragatisocialwelfaretrust.org</div>
          </li>
          <li>
            <div className="text-white ">171, Street No.2 Kh.No.46 A-block, Near Police Chowki ,
                D.C.M Colony , Part-2 , Ibrahimpur , Delhi-110036
                </div>
          </li>
         
        </nav>
      </div>
     
      
    </div>
  </div>
 
</footer>
    </div>
  )
}
