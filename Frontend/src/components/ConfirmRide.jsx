import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center absolute w-[93%] top-0 ' onClick={() => {
        props.setVehiclePanel(false)
      }}><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5 '>Confirm your ride</h3>
      <div className='flex flex-col gap-2 justufy-between items-center '>
        <img className='h-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png " alt="" />
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
        <button 
        onClick={() => {props.setVehicleFound(true)
          props.setConfirmRidePanel(false)
        }}
         className='w-[93%] mt-5 bg-green-600 text-white font-semibold text-lg p-2 rounded-lg '>
          Confirm Ride
        </button>
      </div>
    </div>
  )
}

export default ConfirmRide
