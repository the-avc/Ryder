import React from 'react'
import { Link } from 'react-router-dom'
import tempImg from '../assets/uber.gif'

const Riding = () => {
    return (
        <div className='h-screen '>
            <Link to='/home' className='fixed h-10 w-10 right-2 top-2 bg-white flex items-center justify-center rounded-full'>
                <i className=" text-lg font-medium ri-home-5-line"></i>
            </Link>
            <div className='h-1/2' >
                <img className='h-full w-full object-cover' src={tempImg} alt="" />
            </div>
            <div className='h-1/2  p-4'>

                <div className='flex items-center justify-between'>
                    <img className='h-18' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png " alt="" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'> Sarthak</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 justufy-between items-center '>
                    <div className='w-full mt-5'>

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
                </div>
                <button
                    className='w-full mt-5 bg-green-600 text-white font-semibold text-lg p-2 rounded-lg '>
                    Make a Payment
                </button>


            </div>
        </div>
    )
}

export default Riding
