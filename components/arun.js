import React from 'react'
import Image from 'next/image'
export default function arun() {
  return (
    <div className="container max-w-screen-lg  flex h-screen my-20 mx-auto  ">
        <div className="text-black w-7/12 border  ">
            <p className="uppercase my-6 text-2xl font-Bree">vision of LLCO</p>
            <p className="text-[#7a7a7a] my-4">We are working tirelessly to ensure better outcomes for visually impaired children in India and across the world.</p>
            <div className="">
            <Image width={1000} height={1000} src="/Donating.jpeg" className="h-[50vh]  w-full  bg-cover" alt="Rating Image" />
            </div>

            <p className="my-4 text-2xl font-bold font-OpenSans">Project Showcase</p>
            <p className="text-[#7a7a7a]">Dry Ration Kits distributed to Visually Impaired with support from Smile Foundation.</p>
        </div>







        <div className="mx-10">

          <p className="uppercase text-[#7a7a7a] text-sm font-OpenSans">How your donation is invested</p>

          <div>
            <h1 className="font-Bree text-[#462f2e] py-6 text-2xl">Well-designed plans and supports</h1>
            <p className="text-[#333333]">Your donation to LLCO helps us to continue to provide assistance to self help groups to create better future and empowerment across India.</p>
          </div>

          <div>
            <h1 className="font-Bree text-[#462f2e] py-6 text-2xl ">Well-designed plans and supports</h1>
            <p className="text-[#333333]">Your donation to LLCO helps us to continue to provide assistance to self help groups to create better future and empowerment across India.</p>
          </div>

          <div>
            <h1 className="font-Bree text-[#462f2e] py-6 text-2xl ">Well-designed plans and supports</h1>
            <p className="text-[#333333]">Your donation to LLCO helps us to continue to provide assistance to self help groups to create better future and empowerment across India.</p>
          </div>
 
          <button className="px-4 py-2 border  text-[#462f2e] mt-10 border-[#462f2e]"> view our Services    and  Support </button>


        </div>



    </div>
  )
}
