import React ,{useRef}from 'react'
import Navbar from '../components/Navbar'
import { GoogleMap,Marker, LoadScript } from '@react-google-maps/api';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import emailjs from '@emailjs/browser';
import Image from 'next/image'
import 'react-toastify/dist/ReactToastify.css';
import NavBarNew from '../components/NavBarNew';

export default function Contact() {



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dmoo1lr', 'template_du2nrri', form.current, '6Olao_MD3TfJmvuHR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };




  const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const center = {
    lat:   28.773308984865977,
    lng: 77.1748320845077
   , 
  };
 

  const position = {
    lat:  28.773308984865977,
    lng: 77.1748320845077
  }

  

  const onLoad = marker => {
    console.log('marker: ', marker)
  }
  
  return (
    <div>
        <NavBarNew/>
        <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto md:flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <div width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no"  >
      <LoadScript
      googleMapsApiKey="AIzaSyC33M7eaDIm3nM7-H9ElQdeGjiMDeg1iNE"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker
      onLoad={onLoad}
      position={position}
    />
        <></>
      </GoogleMap>
    </LoadScript>
      </div>
      <div className="bg-white relative flex 
      hover:translate-y-3/4 transition-all
      md:hover:translate-y-0 
      flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">171, Street No.2 Kh.No.46 A-block, Near Police Chowki ,
                D.C.M Colony , Part-2 , Ibrahimpur , Delhi-110036</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-indigo-500 leading-relaxed">pragtisocailwelferetrust@gmail.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">+91 99716 08252</p>
        </div>
      </div>
    </div>
    <form ref={form} onSubmit={sendEmail} className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        Feel free to react out us , about any thing</p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="user_name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
        id="email" name="user_email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label required htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea required id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button  
 
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    onClick={() => toast.success("Email is Send")}
 
      >Submit</button>
      <p className="text-xs text-gray-500 mt-3">
       
        </p>
    </form>
  </div>
</section>
    </div>
  )
}

