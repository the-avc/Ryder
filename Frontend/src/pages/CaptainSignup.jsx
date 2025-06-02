import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
import logo from '../assets/RyderC.png'

const CaptainSignup = () => {
   const navigate = useNavigate()
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [showPassword, setShowPassword] = useState(false)
   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const { captain, setCaptain } = useContext(CaptainDataContext)
   const [vehicleType, setVehicleType] = useState('')
   const [vehicleColor, setVehicleColor] = useState('')
   const [vehiclePlate, setVehiclePlate] = useState('')
   const [vehicleCapacity, setVehicleCapacity] = useState('')

   const submitHandler = async (e) => {
      e.preventDefault()

      const newCaptain = {
         fullName: {
            firstName,
            lastName
         },
         email,
         password,
         vehicle: {
            type: vehicleType,
            color: vehicleColor,
            plate: vehiclePlate,
            capacity: vehicleCapacity
         }
      }

      try {
         const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, newCaptain)
         if (res.status === 201) {
            const data = res.data
            setCaptain(data.captain)
            localStorage.setItem('token', data.token)
            navigate('/captain-home')
         }
      } catch (error) {
         console.error(error.response?.data || error.message)
      }

      setEmail('')
      setFirstName('')
      setLastName('')
      setPassword('')
      setVehicleType('')
      setVehicleColor('')
      setVehiclePlate('')
      setVehicleCapacity('')
   }

   return (
      <div className='p-7 h-screen flex flex-col justify-between'>
         <div>
            <img className='w-26 mb-5' src={logo} alt="" />

            <form onSubmit={submitHandler}>
               <h3 className='text-lg font-medium mb-2'>What's our Captain's name</h3>
               <div className='flex gap-4 mb-5'>
                  <input
                     required
                     value={firstName}
                     onChange={(e) => setFirstName(e.target.value)}
                     className='bg-[#eeeeee] rounded px-4 py-2 border-white w-1/2 text-base placeholder:text-base'
                     type="text"
                     placeholder='First Name'
                  />
                  <input
                     required
                     value={lastName}
                     onChange={(e) => setLastName(e.target.value)}
                     className='bg-[#eeeeee] rounded px-4 py-2 border-white w-1/2 text-base placeholder:text-base'
                     type="text"
                     placeholder='Last Name'
                  />
               </div>

               <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
               <input
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border-white w-full text-base placeholder:text-base'
                  type="email"
                  placeholder='email@example.com'
               />

               <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
               <div className='relative mb-5'>
                  <input
                     required
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     className='bg-[#eeeeee] rounded px-4 py-2 pr-10 border-white w-full text-base placeholder:text-base'
                     type={showPassword ? 'text' : 'password'}
                     placeholder='password'
                  />
                  <i
                     className={`ri-${showPassword ? 'eye-off-fill' : 'eye-fill'} absolute right-3 top-2 text-xl text-gray-600 cursor-pointer`}
                     onClick={() => setShowPassword(!showPassword)}
                  ></i>
               </div>

               <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
               <div className='mb-5'>
                  <div className='flex gap-4 mb-3'>
                     <select
                        required
                        value={vehicleType}
                        onChange={(e) => setVehicleType(e.target.value)}
                        className='bg-[#eeeeee] rounded px-4 py-2 border-white w-1/2 text-base placeholder:text-base'
                     >
                        <option value="">Select Vehicle Type</option>
                        <option value="car">Car</option>
                        <option value="bike">Bike</option>
                        <option value="truck">Truck</option>
                     </select>

                     <input
                        required
                        minLength={3}
                        value={vehicleColor}
                        onChange={(e) => setVehicleColor(e.target.value)}
                        className='bg-[#eeeeee] rounded px-4 py-2 border-white w-1/2 text-base placeholder:text-base'
                        type="text"
                        placeholder='Vehicle Color (min 3 chars)'
                     />
                  </div>
                  <div className='flex gap-4 mb-3'>
                     <input
                        required
                        minLength={7}
                        value={vehiclePlate}
                        onChange={(e) => setVehiclePlate(e.target.value)}
                        className='bg-[#eeeeee] rounded px-4 py-2 border-white w-1/2 text-base placeholder:text-base'
                        type="text"
                        placeholder='License Plate Number'
                     />

                     <input
                        required
                        min={1}
                        value={vehicleCapacity}
                        onChange={(e) => setVehicleCapacity(e.target.value)}
                        className='bg-[#eeeeee] rounded px-4 py-2 border-white w-1/2 text-base placeholder:text-base'
                        type="number"
                        placeholder='Vehicle Capacity'
                     />
                  </div>
               </div>

               <button
                  className='bg-[#111] font-semibold mb-3 text-white rounded px-4 py-2 border w-full text-lg placeholder:text-base'>
                  Signup
               </button>
            </form>

            <p className='text-center'>
               Already a Captain? <Link to='/captain-login' className='text-blue-600'>Login Here</Link>
            </p>
         </div>

         <div>
            <p className='mt-2 text-[10px] leading'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente vero consectetur, omnis veritatis deserunt architecto ut labore quia possimus quas animi ex eum.</p>
         </div>
      </div>
   )
}

export default CaptainSignup
