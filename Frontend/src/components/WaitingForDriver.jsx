import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center absolute w-[93%] top-0 ' onClick={() => {
        props.setWaitingForDriver(false)
      }}><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>

     <div className='flex items-center border-2 border-[#07aa97] p-3 bg-[#07aa97] rounded-xl justify-between'>
<img className='h-18' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png " alt="" />
<div className='text-right'>
  <h2 className='text-lg font-medium'> Sarthak</h2>
  <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
  <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
</div>
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
              <p className='text-sm -mt-1 text-gray-600'>Van Vihar, Bhopal</p>
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
      </div>
    </div>
  )
}

export default WaitingForDriver
