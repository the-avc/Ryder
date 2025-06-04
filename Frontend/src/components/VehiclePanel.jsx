import React from 'react'
import carImg from '../assets/car.png'
import autoImg from '../assets/auto.png'
import bikeImg from '../assets/bike.webp'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center absolute w-[93%] top-0 ' onClick={() => {
        props.setVehiclePanel(false)
      }}><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5 '>Choose a Vehicle</h3>


      <div onClick={() => {
        props.setConfirmRidePanel(true)
        props.setSelectedVehicle({
          type: 'car',
          name: 'Sedan',
          image: carImg,
          price: '193.20',
          seats: 4
        })
      }} className=' w-full mb-2 border-2 border-gray-200 active:border-black  bg-gray-100 rounded-xl p-2 flex  items-center justify-between '>
        <img className='h-11' src={carImg} alt="" />
        <div className='-ml-2 w-1/2 '>
          <h4 className='font-medium text-base '>Sedan <span><i className='ri-user-3-fill'> </i>4</span></h4>
          <h5 className='font-medium text-sm'>2 mins away</h5>
          <p className='font-normal text-xs text-gray-600 '>Affordable, compact rides</p>
        </div>
        <h2 className='text-lg font-semibold'>₹193.20</h2>
      </div>
      <div onClick={() => {
        props.setConfirmRidePanel(true)
        props.setSelectedVehicle({
          type: 'auto',
          name: 'Auto',
          image: autoImg,
          price: '100',
          seats: 3
        })
      }} className=' w-full mb-2  border-2 border-gray-200 active:border-black bg-gray-100 rounded-xl p-2 flex  items-center justify-between '>
        <img className='h-11' src={autoImg} alt="" />
        <div className=' -ml-2 w-1/2 '>
          <h4 className='font-medium text-base '>Auto <span><i className='ri-user-3-fill'> </i>3</span></h4>
          <h5 className='font-medium text-sm'>2 mins away</h5>
          <p className='font-normal text-xs text-gray-600 '>Affordable auto rides</p>
        </div>
        <h2 className='text-lg font-semibold'>₹100</h2>
      </div>

      <div onClick={() => {
        props.setConfirmRidePanel(true)
        props.setSelectedVehicle({
          type: 'bike',
          name: 'Moto',
          image: bikeImg,
          price: '65',
          seats: 1
        })
      }} className=' w-full mb-2 border-2  border-gray-200 active:border-black bg-gray-100 rounded-xl p-2 flex  items-center justify-between '>
        <img className='h-11' src={bikeImg} alt="" />
        <div className='-ml-2 w-1/2 '>
          <h4 className='font-medium text-base '>Moto <span><i className='ri-user-3-fill'> </i>1</span></h4>
          <h5 className='font-medium text-sm'>2 mins away</h5>
          <p className='font-normal text-xs text-gray-600 '>Affordable motorcycle rides</p>
        </div>
        <h2 className='text-lg font-semibold'>₹65</h2>
      </div>
    </div>
  )
}

export default VehiclePanel
