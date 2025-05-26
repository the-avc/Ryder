import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
     <div className='h-screen bg-cover bg-bottom bg-[url(https://th.bing.com/th/id/OIP.XtrYiQsT-fmQ-7H57HTvDgHaLH?cb=iwp2&rs=1&pid=ImgDetMain)] pt-8  flex justify-between flex-col w-full '>
        <img className='w-16 ml-8' src="https://1000logos.net/wp-content/uploads/2021/04/Uber-logo.png" alt="" />
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-[25px] font-semibold'> Get Started with Uber </h2>
            <Link to='/login' className=' flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-4'>Continue</Link>
        </div>
     </div>
    </div>
  )
}

export default Start
