import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import tempImg from '../assets/uber.gif'
import logo from '../assets/RyderC.png'
import CaptainDetails from '../components/CaptainDetails'
import RidePopup from '../components/RidePopup'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopup from '../components/ConfirmRidePopup'

const CaptainHome = () => {

  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)


  const ridePopupPanelRef = useRef(null)
  const confirmRidePopupPanelRef = useRef(null)

  useGSAP(function () {
    if (confirmRidePopupPanel) {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePopupPanel])



  useGSAP(function () {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ridePopupPanel])


  return (
    <div className='h-screen '>
      <div className='fixed p-4 top-0 flex items-center justify-between w-screen'>
        <img className='w-18' src={logo} alt="" />
        <Link to='/captain/logout' className='flex items-center gap-2 px-4 py-2 justify-center bg-red-500 hover:bg-600 rounded-full'>
          <i className="text-lg font-medium ri-logout-box-r-line text-white"></i>
        </Link>
      </div>
      <div className='h-3/5' >
        <img className='h-full w-full object-cover' src={tempImg} alt="" />
      </div>
      <div className='h-2/5  p-6'>
        <CaptainDetails />
      </div>
      <div ref={ridePopupPanelRef} className='w-full fixed z-10 bottom-0 translate-y-full bg-white p-3 py-6 px-3 pt-12'>
        <RidePopup setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>
      <div ref={confirmRidePopupPanelRef} className='w-full fixed  h-screen z-10 bottom-0 translate-y-full bg-white p-3 py-6 px-3 pt-12'>
        <ConfirmRidePopup setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
      </div>

    </div>
  )
}

export default CaptainHome