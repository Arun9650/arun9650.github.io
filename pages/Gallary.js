import React from 'react'
import NavBar from '../components/Navbar'
export default function Gallary() {
  return (
    <>
      <NavBar />


      <section className="text-gray-600  container border body-font">
        <div className="container px-5  py-20 mx-auto flex flex-wrap">
          <div className="lg:w-2/3 mx-auto">
            <div className="flex flex-wrap w-full py-10 px-10 relative mb-4">
              <img alt="gallery" className="w-full  border h-[50vh] object-center block "
                src="banner.jpeg" />

            </div>



            <div className="flex flex-wrap -mx-2">
              <div className="px-2 w-1/2">
                <div className="flex flex-wrap w-full bg-gray-100  relative">
                  <img alt="gallery" className="w-full  h-full object-center block " src="image1.jpeg" />

                </div>
              </div>
              <div className="px-2 w-1/2">
                <div className="flex flex-wrap w-full  relative">
                  <img alt="gallery" className="w-full  h-full  block " src="image2.jpeg" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
