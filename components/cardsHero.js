import React from 'react'
import Image from 'next/image'

export default function cardsHero() {
    return (
        <div className="flex my-20 flex-col  text-black items-center text-center ">
            <div className="m-4 text-2xl leading-7 w-3/4 uppercase tracking-widest font-semibold font-Bree text-[#462f2e] ">
                <p className="">Once a blind man asked Swami Vivekananda - &quot;what is worse than losing your eyesight?&quot; Swamiji replied &quot;it&quot;s losing your vision.&quot;</p>
            </div>
            <div className="w-2/3 mb-6  ">
                <p className="text-[#7a7a7a] leading-6 text-lg font-OpenSans  " >
                    Life Line Care Organisation was started as an organization with a vision to establish the honor and dignity of our neglected part of the society. Since inception it’s continuously striving to create awareness among the citizens and uplifting the downtrodden strata of society. Conducting various awareness campaigns and workshops for socially disadvantaged people in general and visually impaired people in particular.
                </p>
            </div>
{/* 
          <div className="flex  items-center justify-around">
              <div class="card card-compact my-7  bg-base-100 shadow-xl">
                  <figure>
                    <img src="https://cdn.shortpixel.ai/spai/w_437+q_lossy+ret_img+to_webp/https://llcoindia.org/wp-content/uploads/elementor/thumbs/Spreading-Education-p3a875wpq8h82lllxpqy64n0dbkk4il3tv3g7flu3k.jpg" alt="Shoes" className="rounded-none" />
                    </figure>
                  <div class="card-body bg-white">
                      <h2 class="card-title">Who we are</h2>
                      <p className="text-start">LIFE LINE CARE ORGANISATION (LLCO) is a non-profit making charitable Organisation. LLCO established for the welfare and upliftment of the disabled and weaker sections of the society.</p>
                      <div class="card-actions justify-start">
                          <button class="btn btn-primary">Buy Now</button>
                      </div>
                  </div>
              </div>
              <div class="card bg-white card-compact my-7   shadow-xl">
                  <figure><img src="https://cdn.shortpixel.ai/spai/w_437+q_lossy+ret_img+to_webp/https://llcoindia.org/wp-content/uploads/elementor/thumbs/LLCO-building-Future-p3d2g2tz51dfdov6zb6sxrgpuqt824k88p6993vlpc.jpg" alt="Shoes" /></figure>
                  <div class="card-body">
                      <h2 class="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-start">
                          <button class="btn btn-primary">Buy Now</button>
                      </div>
                  </div>
              </div>
              <div class="card bg-white card-compact my-7  shadow-xl">
                  <figure><img src="https://cdn.shortpixel.ai/spai/w_437+q_lossy+ret_img+to_webp/https://llcoindia.org/wp-content/uploads/elementor/thumbs/Empowering-Lives-p3a875wpq8h82lllxpqy64n0dbkk4il3tv3g7flu3k.jpg" alt="Shoes" /></figure>
                  <div class="card-body">
                      <h2 class="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-start">
                          <button class="btn btn-primary">Buy Now</button>
                      </div>
                  </div>
              </div>
          </div> */}


<div className=" md:flex   w-3/4  items-center justify-center  flex  md:justify-between">
    
    <div className="md:flex md:items-start  md:justify-between   mx-auto ">

    <div className="max-w-xs mx-4   text-start   ">
        <a href="#">
            <Image width={500} height={300}  className="rounded" src="https://cdn.shortpixel.ai/spai/w_437+q_lossy+ret_img+to_webp/https://llcoindia.org/wp-content/uploads/elementor/thumbs/Spreading-Education-p3a875wpq8h82lllxpqy64n0dbkk4il3tv3g7flu3k.jpg" alt=""/>
        </a>
        <div className="py-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Who we are</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 ">LIFE LINE CARE ORGANISATION (LLCO) is a non-profit making charitable Organisation. LLCO established for the welfare and upliftment of the disabled and weaker sections of the society.</p>

            <a href="#" className="inline-flex items-center py-2 uppercase  text-sm font-bold  text-center text-[#ce842f]">
                About us 
                <svg aria-hidden="true" className="ml-2  -mr-1  w-4 h-4" fill="#ce842f" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>
    </div>
    
    <div className="max-w-xs   mx-4  text-start">
        <a href="#">
            <Image width={500} height={300} className="rounded" src="https://cdn.shortpixel.ai/spai/w_437+q_lossy+ret_img+to_webp/https://llcoindia.org/wp-content/uploads/elementor/thumbs/LLCO-building-Future-p3d2g2tz51dfdov6zb6sxrgpuqt824k88p6993vlpc.jpg" alt=""/>
        </a>
        <div className="py-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight ">What we do </h5>
            </a>
            <p className="mb-3 font-normal ">Our mission is to make the underprivileged sections free from illiteracy, ignorance, exploitation and discrimination. where all sections of society live with harmony and cooperation.</p>
            <a href="#" className="inline-flex items-center py-2  text-sm font-bold uppercase text-center text-[#ce842f] ">
                find out more
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="#ce842f" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>
    </div>

    <div className="max-w-xs   mx-4  text-start">
        <a href="#">
            <Image width={500} height={300} className="w-full rounded  h-full " src="https://cdn.shortpixel.ai/spai/w_437+q_lossy+ret_img+to_webp/https://llcoindia.org/wp-content/uploads/elementor/thumbs/Empowering-Lives-p3a875wpq8h82lllxpqy64n0dbkk4il3tv3g7flu3k.jpg" alt=""/>
        </a>
        <div className="py-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">How you help</h5>
            </a>
            <p className="mb-3 font-normal">Across India, various LLCO supported projects bring dignity and smile to less fortunate people of the society, your support is very important to us.</p>
            <a href="#" className="inline-flex items-center py-2  uppercase text-sm font-bold text-center text-[#ce842f]">
                how you help
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="#ce842f" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path filrule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>
    </div>


    </div>
</div >











        </div>
    )
}
