import React from 'react'
import {FaChild,FaAnchor,FaRegHandSpock} from 'react-icons/fa'
import {BiAnchor} from 'react-icons/bi'
export default function Colums() {
  return (
    <section className="text-black container max-w-[1140px] mx-auto body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-4xl text-xl font-medium uppercase font-Bree tracking-widest  title-font text-gray-900 mb-4">Get Involved</h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Evey Drop counts in the Ocean, Together we can change Lives.</p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#ce842f] inline-flex"></div>
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className=" inline-flex items-center justify-center rounded-full text-yellow-300  border border-yellow-300 w-24 h-24  mb-5 flex-shrink-0">
          <FaChild className="text-6xl  text-yellow-300   "/>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Help a seriously ill child </h2>
            <p className="leading-relaxed text-base">Your donation will provide a lifeline of support to a child, like Jack, who has a life threatening illness and his family when they need it most.</p>
            
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center text-yellow-300  border border-blue-700 justify-center rounded-full mb-5 flex-shrink-0">
          {/* <FaAnchor className="text-6xl text-yellow-300"/> */}
          <BiAnchor className="text-6xl  text-blue-300"/>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Support a family in need </h2>
            <p className="leading-relaxed text-base">No parent expects to outlive their child but for some families it’s a reality. Your donation will help a family facing one of the toughest times imaginable.</p>
            
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center border border-yellow-300 justify-center rounded-full  mb-5 flex-shrink-0">
          <FaRegHandSpock className="text-6xl text-yellow-300 "/>
          </div>
          <div className="flex-grow">
            <h2 className="text-black text-lg title-font font-medium mb-3">Become a sponsor </h2>
            <p className="leading-relaxed text-base">Our Family Support Workers care for families at a time of great need. Your donation will help families get the support they so desperately need. </p>
           
          </div>
        </div>
      </div>
      
    </div>
  </section>
  )
}
