import React from 'react'
import Image from 'next/image'
export default function Onefacecard() {
    return (

        <div className="relative ">
            <div className="bg-[#ce842f] h-[60vh] z-10 justify-center   relative overflow-hidden flex  items-center">
                <section className="text-gray-600 w-2/3 flex items-center  justify-center  body-font">
                    <div className="container  justify-evenly mx-auto flex px-5 py-24 md:flex-row flex-col  items-center">
                        <div className="flex  items-start  justify-between ">
                            <div className="flex-shrink-0  w-64 h-64   object-cover object-center sm:mb-0 mb-4">
                                <Image width={1000} height={1000} className="object-cover border object-center rounded-full" alt="hero" src="https://cdn.shortpixel.ai/spai/w_496+q_lossy+ret_img+to_webp/https://llcoindia.org/wp-content/uploads/elementor/thumbs/Mrityunjay-Narayanan-p3a8naswm519jdv7w35fc7v6kayqrm5c2lkokib0co.jpg" />
                            </div>
                            <div className="  w-2/3  ml-4 justify-center  min-h-min   flex flex-col md:items-start md:text-left items-center ">
                                <p className="mb-8  text-white  text-2xl font-light font-OpenSans  leading-none">“One person can make all the difference for a child across the globe…LLCO is living proof that, although helping just one person can seem like a drop in the ocean, that drop can be a person’s whole world. One by one…we will change the world for the better.”</p>
                                <div className="flex  flex-col font-OpenSans ">
                                    <p className="text-white ">Mrityunjay Narayanan</p>
                                    <br />
                                    <p className="text-white ">– Sponsor since 2012</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="absolute bottom-[-4rem] z-10  ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ce842f" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
                    <path className="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
                    <path className="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
                </svg>
            </div>
        </div>

    )
}
