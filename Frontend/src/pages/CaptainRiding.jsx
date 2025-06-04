import React, { useRef, useState } from 'react'
import tempImg from '../assets/uber.gif'
import logo from '../assets/RyderC.png'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import FinishRide from '../components/FinishRide'


const CaptainRiding = () => {

  const [finishRidePanel, setFinishRidePanel] = useState(false)
  const finishRidePanelRef = useRef(null)

  useGSAP(function () {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [finishRidePanel])


  return (
    <div className='h-screen  '>

      <div className='fixed p-4 top-0 flex items-center justify-between w-screen'>
        <img className='w-18' src={logo} alt="" />
        <Link to='/captain-home' className='h-10 w-10  bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-5/6' >
        <img className='h-full w-full object-cover' src={tempImg} alt="" />
      </div>
      <div className='h-1/6  p-6  flex items-center relative justify-between bg-[#78ece0]'
        onClick={() => {
          setFinishRidePanel(true)
        }}>
        <h5 className='pb-1 text-center absolute w-[85%] top-0 ' onClick={() => {

        }}><i className=" text-3xl  text-black ri-arrow-up-wide-line"></i></h5>
        <h4 className='text-xl font-semibold'>4 KM away</h4>
        <button className=' bg-[#04665a]  text-white font-semibold text-lg p-3 px-10 rounded-lg '>Complete Ride</button>
      </div>
      <div ref={finishRidePanelRef} className='w-full fixed  z-10 bottom-0 translate-y-full bg-white p-3 py-6 px-3 pt-12'>
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>



    </div>
  )
}

export default CaptainRiding
