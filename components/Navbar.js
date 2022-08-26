import React from 'react'
import Image from 'next/image'
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'
import {AiOutlineMenu} from "react-icons/ai";
export default function Navbar() {
    return (
        <>
            <header className="container z-1 mx-auto  border  max-w-[1200px] text-gray-600 body-font">
                <div className='flex  items-center justify-between px-8'>
                    <div className='flex  items-center  h-min justify-center'>
                        <Image src="/logo.svg" alt="logo" className='' width={100} height={100} />
                        <p>Pragati Social Welfere Trust </p>
                    </div>
                    <div className='flex  items-center'>
                        <i className='px-2 cursor-pointer text-purple-900 text-xl'><BsInstagram /></i>
                        <i className='px-2 cursor-pointer text-blue-900  text-xl'><FaFacebookSquare /></i>
                        <i className='px-2 cursor-pointer text-red-700 text-xl'><IoLogoYoutube /></i>
                        <button className='btn  btn-primary'>Donation </button>
                    </div>
                </div>
                <div className="container hidden  mx-auto md:flex flex-wrap   h-12 flex-col md:flex-row items-center">
                    <div className=' px-4 py-4  h-full flex flex-wrap items-center text-black border-yellow-500'>
                        <a className='hover:text-blue-700    text-lg font-shadow cursor-pointer px-4 hover:underline'>Home</a>
                        <a className='hover:text-blue-700   text-lg font-shadow cursor-pointer px-4 hover:underline'>About</a>
                        <a className='hover:text-blue-700   text-lg font-shadow cursor-pointer px-4 hover:underline'>Our Impact</a>
                        <a className='hover:text-blue-700   text-lg font-shadow cursor-pointer px-4 hover:underline'>Awards & Recognition </a>
                        <a className='hover:text-blue-700   text-lg font-shadow cursor-pointer px-4 hover:underline'>Our Work</a>
                        <a className='hover:text-blue-700   text-lg font-shadow cursor-pointer px-4 hover:underline'>Gallary </a>
                        <a className='hover:text-blue-700   text-lg font-shadow cursor-pointer px-4 hover:underline'>Resources </a>
                        <a className='hover:text-blue-700   text-lg font-shadow cursor-pointer px-4 hover:underline'>Get Involved </a>
                        <a className='hover:text-blue-700   text-lg font-shadow cursor-pointer px-4 hover:underline'>Contact </a>



                    </div>
                </div>
               
            </header>
        </>
    )
}
