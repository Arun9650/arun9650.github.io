import React from 'react'
import Image from 'next/image'
export default function FooterHero() {
    return (
        <div>

            <div className="relative  h-[90vh] overflow-hidden">
                <Image layout="fill" src="https://llcoindia.org/wp-content/uploads/2019/04/educating-street-children.jpg" alt="image"
                    className="w-full object-center object-cover h-full"
                />
                <div className="absolute top-0 bottom-0 left-0 right-0  bg-[#0c0c0c] opacity-50"></div>
                <div className="absolute top-0 bottom-0 flex items-center left-0 right-0 ">

                    <div className="w-3/6"></div>
                    <div className="w-3/6 flex items-center justify-center  ">
                        
                            <div className="  w-3/4 border-yellow-400">
                            <h1 className="text-5xl   py-4  font-bold text-white mb-6  font-Bree">CREATE HOPE</h1>
                            <p className="  text-white text-xl my-8">Our Educational Programmes help children to learn things and enable them to create a better future for them.</p>
                            <div className="my-20">
                                <button className="border px-7 border-white text-white py-3.5 font-bold min-w-min">GIVE EDUCATION </button>
                            </div>
                            </div>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}
