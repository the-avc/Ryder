import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopup = (props) => {
    const[otp, setOtp] = useState('')

const submitHandler = (e) => {
  e.preventDefault()
}

  return (
   <div>
           <h5 className='p-1 text-center absolute w-[93%] top-0 ' onClick={() => {
        props.setConfirmRidePopupPanel(false)
      }}><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5 '>Confirm this ride to Start!
      </h3>
      <div className='flex mt-4 p-3 border-2 border-yellow-400 rounded-lg items-center justify-between'>
        <div className='flex items-center  gap-3'>
            <img className='h-12 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUdzITbVC52EY4vktN1RVKSPh23YqE5JbKVA&s" alt="" />
            <h2 className='text-lg font-medium'>Ravi patel</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2KM</h5>
      </div>
      <div className='flex flex-col gap-2 justufy-between items-center '>
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-2  border-gray-300'>
            <i className=' text-xl ri-map-pin-user-fill' > </i>
            <div >
              <h3 className='text-lg font-semibold '> 562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
            <i className=' text-xl ri-map-pin-2-fill' > </i>
            <div >
              <h3 className='text-lg font-semibold '> 562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3'>
            <i className=' text-xl ri-currency-line' > </i>
            <div >
              <h3 className='text-lg font-semibold '> $193.20</h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash, Cash</p>
            </div>
          </div>
        </div>
     
       <div className='mt-6 w-full  '>
           <form onSubmit={(e)=>{
            submitHandler(e)
           }} >
            <input value={otp} onChange={(e)=>setOtp(e.target.value)} type="text"className=' bg-[#eeeeee] mt-3  rounded px-6 py-4 w-full text-lg font-mono ' placeholder='Enter OTP'  />

                <Link to='/captain-riding' className='w-full mt-5 flex justify-center bg-green-600 text-white font-semibold text-lg p-3 rounded-lg '>
          Confirm Ride
        </Link>
         <button 
        onClick={() => {
            props.setConfirmRidePopupPanel(false)
            props.setRidePopupPanel(false)

        }}
         className='w-full mt-2 bg-red-600 text-white font-semibold text-lg p-3 rounded-lg '>
      Cancel
        </button>
        </form>
     
       </div>
      </div>
    </div>
  )
}

export default ConfirmRidePopup
