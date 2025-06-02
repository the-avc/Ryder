import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'
import logo from '../assets/Ryder.png'

const UserSignup = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [showPassword, setShowPassword] = useState(false)

   const navigate = useNavigate()
   const { user, setUser } = useContext(UserDataContext)

   const submitHandler = async (e) => {
      e.preventDefault();
      const newUser = {
         fullName: {
            firstName: firstName,
            lastName: lastName
         },
         email: email,
         password: password
      };

      try {
         const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
         if (res.status === 201) {
            const data = res.data;
            setUser(data.user);
            localStorage.setItem('token', data.token);
            navigate('/home');
         }
      } catch (error) {
         console.error(error.response?.data || error.message);
      }

      setEmail('')
      setFirstName('')
      setLastName('')
      setPassword('')
   }

   return (
      <div className='p-7 h-screen flex flex-col justify-between'>
         <div>
            <img className='w-22 mb-5' src={logo} alt="" />

            <form onSubmit={submitHandler}>
               <h3 className='text-lg font-medium mb-2'>What's your name</h3>
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

               <h3 className='text-lg font-medium mb-2'>What's your email</h3>
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
                     className='bg-[#eeeeee] rounded px-4 py-2 border-white w-full text-base placeholder:text-base pr-10'
                     type={showPassword ? 'text' : 'password'}
                     placeholder='password'
                  />
                  <i
                     className={`ri-eye${showPassword ? '-off' : ''}-fill absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-600 cursor-pointer`}
                     onClick={() => setShowPassword(prev => !prev)}
                  ></i>
               </div>

               <button
                  className='bg-[#111] font-semibold mb-3 text-white rounded px-4 py-2 border w-full text-lg'>
                  Signup
               </button>
            </form>

            <p className='text-center'>
               Already have an account? <Link to='/login' className='text-blue-600'>Login Here</Link>
            </p>
         </div>

         <div>
            <p className='mt-2 text-[10px] leading-tight'>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente vero consectetur, omnis veritatis deserunt architecto ut labore quia possimus quas animi ex eum.
            </p>
         </div>
      </div>
   )
}

export default UserSignup
