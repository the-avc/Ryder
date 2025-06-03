import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'
import logo from '../assets/Ryder.png'
import { toast } from 'react-hot-toast'

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const { user, setUser } = useContext(UserDataContext)
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()

        const userCredentials = { email, password }

        try {
            const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userCredentials)
            if (res.status === 200) {
                const data = res.data
                setUser(data.user)
                // console.log(data)
                localStorage.setItem('token', data.token)
                toast.success('Login successfull !')
                navigate('/home')
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Invalid credentials')
            console.error(error.response?.data || error.message)
        }

        setEmail('')
        setPassword('')
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-[88px] mb-5' src={logo} alt="Ryder Logo" />

                <form onSubmit={submitHandler}>
                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border-white w-full text-lg placeholder:text-base'
                        type="email"
                        placeholder='email@example.com'
                    />

                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <div className="relative mb-7">
                        <input
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='bg-[#eeeeee] rounded px-4 py-2 border-white w-full text-lg placeholder:text-base pr-10'
                            type={showPassword ? 'text' : 'password'}
                            placeholder='password'
                        />
                        <i
                            className={`ri-eye${showPassword ? '-off' : ''}-fill absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-600 cursor-pointer`}
                            onClick={() => setShowPassword(prev => !prev)}
                        ></i>
                    </div>

                    <button
                        className='bg-[#04665a] mb-7 font-semibold text-white rounded px-4 py-2 w-full text-lg'>
                        Login
                    </button>
                </form>

                <p className='text-center'>
                    New Here? <Link to='/signup' className='text-blue-600'>Create new Account</Link>
                </p>
            </div>

            <div>
                <Link
                    to='/captain-login'
                    className='bg-[#1ccbb6]  flex items-center justify-center mb-5 font-semibold text-white rounded px-4 py-2 border w-full text-lg'>
                    Sign in as Captain
                </Link>
            </div>
        </div>
    )
}

export default UserLogin
