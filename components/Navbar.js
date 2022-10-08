import React, { useEffect } from 'react';
import Image from 'next/image'
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'
import {AiOutlineMenu} from "react-icons/ai";
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'
import {ToastContainer} from 'react-toastify'
import Head from 'next/head'
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router'
import Script from 'next/script'

export default function Navbar() {

        // const [orderAmount, setOrderAmount] = useState(0);


    const makePayment = async () => {
        console.log("here...");
        const res = await initializeRazorpay();
    
        if (!res) {
          alert("Razorpay SDK Failed to load");
          return;
        }
    
        // Make API call to the serverless API
        const data = await fetch("/api/razorpay", { method: "POST" }, ).then((t) =>
          t.json()
        );
        console.log(data);
        var options = {
          key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
          name: "Manu Arora Pvt Ltd",
          currency: data.currency,
          amount: data.amount,
          order_id: data.id,
          description: "Thankyou for your test donation",
          image: "https://manuarora.in/logo.png",
          handler: function (response) {
            // Validate payment at server - using webhooks is a better idea.
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature);
          },
          prefill: {
            name: "Manu Arora",
            email: "manuarorawork@gmail.com",
            contact: "9999999999",
          },
        };
    
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      };

      const initializeRazorpay = () => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          // document.body.appendChild(script);
    
          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };
    
          document.body.appendChild(script);
        });
      };




    // const router = useRouter();
    // const { success, canceled } = router.query;
    // useEffect(() => {
    //     // Check to see if this is a redirect back from Checkout
    //     // const query = new URLSearchParams(window.location.search);

    //   if(success !== undefined || canceled !== undefined) {

    //     if (success) {
    //         console.log('Order placed! You will receive an email confirmation.');
    //     }

    //     if (canceled) {
    //         console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    //     }
    // }

    // }, [success, canceled]);


    

    return (
        <>
            <header className="container z-1 mx-auto  border  max-w-[1200px] text-gray-600 body-font">
                <div className='flex  items-center justify-between px-8'>
                    <div className='flex  items-center  h-min justify-center'>
                    <ToastContainer position='bottom-right' limit={1} />
                        <Image src="/logo.svg" alt="logo"  width={100} height={100} />
                        <p>Pragati Social Welfere Trust </p>
                    </div>

                      
                    <div className='flex  items-center'>
                        <i className='px-2 cursor-pointer text-purple-900 text-xl'><BsInstagram /></i>
                        <i className='px-2 cursor-pointer text-blue-900  text-xl'><FaFacebookSquare /></i>
                        <i className='px-2 cursor-pointer text-red-700 text-xl'><IoLogoYoutube /></i>
                            <button  onClick={makePayment} className="btn btn-primary">Donation</button>
                        <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_KBVkDwk0DAHD0M" async> </script> </form>
     



                    </div>
                </div>
                <div className="container hidden  mx-auto md:flex flex-wrap   h-12 flex-col md:flex-row items-center">
                    <div className=' px-4 py-4  h-full flex flex-wrap items-center text-black border-yellow-500'>
                        <Link href="/">
                        <a className='hover:text-blue-700    text-lg font-shadow cursor-pointer px-4 hover:underline'>Home</a>
                        </Link>
                        <a className='hover:text-blue-700   text-lg font-shadow cursor-pointer px-4 hover:underline'>About</a>
                        <a className='hover:text-blue-700   text-lg font-shadow cursor-pointer px-4 hover:underline'>Our Impact</a>
                        <Link href="/Award">
                        <a className='hover:text-blue-700   text-lg font-shadow cursor-pointer px-4 hover:underline'>Awards & Recognition </a>
                        </Link>

                        <a className='hover:text-blue-700   text-lg font-shadow cursor-pointer px-4 hover:underline'>Our Work</a>
                        <Link href="/Gallary">
                        <a className='hover:text-blue-700   text-lg font-shadow cursor-pointer px-4 hover:underline'>Gallary </a>

                        </Link>
                        
                        <a className='hover:text-blue-700   text-lg font-shadow cursor-pointer px-4 hover:underline'>Get Involved </a>

                        <Link href="/Contact">
                        <a className='hover:text-blue-700   text-lg font-shadow cursor-pointer px-4 hover:underline'>Contact </a>
                        </Link>


                    </div>
                </div>
               
            </header>
        </>
    )
}
