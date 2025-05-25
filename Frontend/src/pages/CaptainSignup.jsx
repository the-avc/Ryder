import React,{ useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
   const [email,setEmail]= useState('')
     const [password,setPassword]= useState('')
      const [firstName,setFirstName]= useState('')
     const [lastName,setLastName]= useState('')
    const [userData,setUserData]= useState('')

    const submitHandler=(e)=>{
   e.preventDefault()
   setUserData({
    fullName:{
        firstName:firstName,
        lastName:lastName
    },
    email:email,
    password:password
   })

   setEmail('')
   setFirstName('')
   setLastName('')
   setPassword('')
}


  return (
   <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-16 mb-10' src="https://1000logos.net/wp-content/uploads/2021/04/Uber-logo.png" alt="" />

            <form onSubmit={(e)=>{ 
                submitHandler(e)

             }}>
                  <h3 className='text-lg font-medium mb-2'>What's our Captain's name</h3>
                <div className='flex gap-4 mb-5'>
                <input required
                 value={firstName}
                 onChange={(e)=>
                 {
                  setFirstName(  e.target.value)
                 }
                 }
                 className='bg-[#eeeeee]  rounded px-4 py-2 border-white w-1/2 text-base placeholder:text-base'
                type="text"  placeholder='First Name' />
     
             <input required
             value={lastName}
                 onChange={(e)=>
                 {
                  setLastName(  e.target.value)
                 }
                 }
            
                 className='bg-[#eeeeee] rounded px-4 py-2 border-white w-1/2 text-base placeholder:text-base'
                type="text"  placeholder='Last Name' />

                     </div> 
                <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
                <input required
          value={email}
                 onChange={(e)=>
                 {
                  setEmail(  e.target.value)
                 }
                 }
                 className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border-white w-full text-base placeholder:text-base'
                type="email"  placeholder='email@example.com' />

                <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                <input required  
              value={password}
                 onChange={(e)=>
                 {
                  setPassword(  e.target.value)
                 }
                 }
                className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border-white w-full text-base placeholder:text-base'
                 type='password' placeholder='password' />

                <button 
                className='bg-[#111]  font-semibold  mb-3 text-white rounded px-4 py-2 border w-full text-lg placeholder:text-base'>
                    Signup</button>
            </form>
                 <p className='text-center'>Already a Captain?  <Link to='/captain-login' className='text-blue-600'> Login Here </Link></p>   

        </div>
        <div>
     <p className='text-[10px] leadin'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente vero consectetur, omnis veritatis deserunt architecto ut labore quia possimus quas animi ex eum.</p>
        </div>
        </div>
  )
}

export default CaptainSignup
