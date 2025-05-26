import React, { use, useRef } from 'react'
import logo from '../assets/Ryder.png'
import tempImg from '../assets/uber.gif'
import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationPanel from '../components/LocationPanel'

const Home = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');

  const [panelOpen, setPanelOpen] = useState(false);
  const togglePanel = () => {
    setPanelOpen(!panelOpen);
  }
  const panelRef = useRef(null);

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 20,
        opacity: 1
      });
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        opacity: 0,
        padding: 0,
      });
    }
  }, [panelOpen]);

  const submitHandler = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  }

  return (
    <div className='h-screen relative'>
      <img className="w-22 absolute left-5 top-5" src={logo} alt="" />
      {/* temporary image */}
      <div className='h-screen w-screen '>
        <img className='h-full w-full object-cover' src={tempImg} alt="" />
      </div>

      <div className=' h-screen absolute top-0 w-full flex flex-col justify-end'>
        <div className='bg-white h-[30%] p-5 relative'>

          <h5 className='absolute top-3 right-4'
            onClick={togglePanel}
            hidden={!panelOpen}
          >
            <i className="ri-arrow-down-s-line text-4xl"
            ></i>
          </h5>


          <h4 className='text-2xl font-semibold'>Find a Trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e);
          }
          }>
            <div className='line absolute h-15 w-0.75 top-[50%] bg-gray-900 rounded-full left-8'></div>
            <input
              value={pickupLocation}
              onChange={(e) => {
                setPickupLocation(e.target.value)
              }}
              onClick={(e) => {
                setPanelOpen(true);
              }}
              className='bg-[#eeeeee] mt-5 rounded px-12 py-2 border-white w-full text-base placeholder:text-base'
              type="text"
              placeholder='Add your Pickup Location'
              required
            />
            <input
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
              }}
              onClick={() =>{
                setPanelOpen(true);
              }}
              className='bg-[#eeeeee] mt-3 rounded px-12 py-2 border-white w-full text-base placeholder:text-base'
              type="text"
              placeholder='Enter your destination'
              required
            />
          </form>
        </div>
        <div ref={panelRef} className='bg-white h-0'>
          {
            panelOpen?
            <LocationPanel/>:
           <></>
          }
        </div>
      </div>
    </div>
  )
}

export default Home