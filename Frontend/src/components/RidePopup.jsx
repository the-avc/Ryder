import React from 'react'

const RidePopup = (props) => {
  return (
    <div>
           <h5 className='p-1 text-center absolute w-[93%] top-0 ' onClick={() => {
        props.setRidePopupPanel(false)
      }}><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5 '>New Ride Available!</h3>
      <div className='flex mt-4 p-3 bg-yellow-400 rounded-lg items-center justify-between'>
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
      <div className='flex w-full items-center justify-between mt-3 '>
            <button 
        onClick={() => {props.setRidePopupPanel(false)
      
        }}
         className=' bg-gray-300 text-gray-700 font-semibold text-lg p-2 px-13 rounded-lg '>
       Ignore
        </button>
          <button 
        onClick={() => {
            props.setConfirmRidePopupPanel(true)
          
        }}
         className=' bg-green-600  text-white font-semibold text-lg p-2 px-13 rounded-lg '>
         Accept
        </button>
     
      </div>
      </div>
    </div>
  )
}

export default RidePopup
