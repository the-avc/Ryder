import React, { use, useRef } from 'react'
import logo from '../assets/Ryder.png'
import { Link } from 'react-router-dom'
import tempImg from '../assets/uber.gif'
import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationPanel from '../components/LocationPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'


const Home = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const togglePanel = () => {
    setPanelOpen(!panelOpen);
  }

  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);


  const submitHandler = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  }
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
  }, [panelOpen])

  useGSAP(function () {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanel])


  useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePanel])

  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehicleFound])

  useGSAP(function () {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [waitingForDriver])



  return (
    <div className='h-screen relative overflow-hidden'>
      <img className="w-22 absolute left-5 top-5" src={logo} alt="" />
      <div className='fixed p-4 top-0 flex items-center justify-end w-screen z-20'>
        <Link
          to='/user/logout'
          className='flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full'
          title="Logout"
        >
          <i className="ri-logout-box-r-line text-xl"></i>
        </Link>
      </div>
      {/* temporary image */}

      <div onClick={() => {
        setVehiclePanel(false)
      }} className='h-screen w-screen '>
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
            <div className='line absolute h-15 w-0.75 top-[40%] bg-gray-900 rounded-full left-8'></div>
            <input
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
              }}
              onClick={() => {
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
            panelOpen ?
              <LocationPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} /> :
              <></>
          }
        </div>
      </div>
      <div ref={vehiclePanelRef} className='w-full fixed z-10 bottom-0 translate-y-full bg-white p-3 py-10 px-3 pt-12'>
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>
      <div ref={confirmRidePanelRef} className='w-full fixed z-10 bottom-0 translate-y-full bg-white p-3 py-6 px-3 pt-12'>
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>
      <div ref={vehicleFoundRef} className='w-full fixed z-10 bottom-0 translate-y-full bg-white p-3 py-6 px-3 pt-12'>
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div ref={waitingForDriverRef} className='w-full fixed z-10 bottom-0 translate-y-full bg-white p-3 py-6 px-3 pt-12'>
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  )
}

export default Home 