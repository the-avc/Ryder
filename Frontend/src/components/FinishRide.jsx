import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center absolute w-[93%] top-0 ' onClick={() => {
        props.setFinishRidePanel(false)
      }}><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5 '>Finish this ride!
      </h3>
      <div className='flex mt-4 p-4 border-2 border-[#78ece0] rounded-lg items-center justify-between'>
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
              <h3 className='text-lg font-semibold '> 123/1-B</h3>
              <p className='text-sm -mt-1 text-gray-600'>Van Vihar, Bhopal, Bhopal</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3'>
            <i className=' text-xl ri-currency-line' > </i>
            <div >
              <h3 className='text-lg font-semibold '> ₹193.20</h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash, Cash</p>
            </div>
          </div>
        </div>

        <div className='mt-6 w-full  '>

          <Link to='/captain-home'
            className='w-full mt-3 flex justify-center bg-[#04665a] text-white font-semibold text-lg p-3 rounded-lg '>Finish
          </Link>
          <p className='text-xs flex items-center justify-center mt-2'>click on finish button if the payment is completed</p>
        </div>
      </div>
    </div>
  )
}

export default FinishRide
