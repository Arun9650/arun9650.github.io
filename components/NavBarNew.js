import React from 'react'
import { useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Script from 'next/script';

 const NavBarNew  = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  <Script id="pay-button" src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_KBVkDwk0DAHD0M" async> </Script> 
{/* <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_KBVkDwk0DAHD0M" async> </script> </form> */}
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





  
    return (
      <div className="px-4 shadow py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <a
            
            aria-label="Company"
            title="Company"
            className="inline-flex  items-center"
          >
            <Image src="/logo.svg" alt="logo.svg" width={100} height={100}  />
            <span className="ml-2 text-md font-bold tracking-wide text-gray-800 uppercase">
              Pragati soical welfere Trust 
            </span>
          </a>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link href={'/'}>
              <a
                
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Home
              </a>
              </Link>
            </li>
            <li>
              <Link href={'/Contact'}>
              <a
                
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Contact us
              </a>
              </Link>
            </li>
            <li>
              <Link href={'/Gallary'}>
              <a
                
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Gallary
              </a>
              </Link>
            </li>
            <li>
              <a
                
                aria-label="About us"
                title="About us"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                About us
              </a>
            </li>
            <li>
              {/* <a
                
                className="inline-flex bg-blue-400 cursor-pointer items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
                onClick={makePayment}
              >

                Donate
              </a> */}

              <form><script  src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_KBVkDwk0DAHD0M" async> </script> </form> 
              
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Company
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <a
                          
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Product
                        </a>
                      </li>
                      <li>
                        <a
                          
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <Link to="Gallary">
                        <a
                          
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Gallry
                        </a>
                        </Link>
                      </li>
                      <li>
                        <a
                          
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About us
                        </a>
                      </li>
                      <li>
                        <a
                          
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  export default NavBarNew;