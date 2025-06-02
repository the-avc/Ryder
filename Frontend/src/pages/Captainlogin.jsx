import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'
import logo from '../assets/RyderC.png'

const CaptainLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [captainData, setCaptainData] = useState({})
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()
        const captainCredentials = {
            email,
            password
        }

        try {
            const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainCredentials)
            if (res.status === 200) {
                const data = res.data
                setCaptain(data.captain)
                localStorage.setItem('token', data.token)
                navigate('/captain-home')
            }
        } catch (error) {
            console.error(error.response?.data || error.message)
        }

        setEmail('')
        setPassword('')
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-26 mb-5' src={logo} alt="" />

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
                    <div className='relative mb-7'>
                        <input
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='bg-[#eeeeee] rounded px-4 py-2 pr-10 border-white w-full text-lg placeholder:text-base'
                            type={showPassword ? 'text' : 'password'}
                            placeholder='password'
                        />
                        <i
                            className={`ri-${showPassword ? 'eye-off-fill' : 'eye-fill'} absolute right-3 top-3 text-xl text-gray-600 cursor-pointer`}
                            onClick={() => setShowPassword(!showPassword)}
                        ></i>
                    </div>

                    <button
                        className='bg-[#111] mb-7 font-semibold text-white rounded px-4 py-2 border w-full text-lg placeholder:text-base'>
                        Login
                    </button>
                </form>

                <p className='text-center'>
                    Join a Fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link>
                </p>
            </div>

            <div>
                <Link
                    to='/login'
                    className='bg-yellow-500 flex items-center justify-center mb-5 font-semibold text-white rounded px-4 py-2 border w-full text-lg placeholder:text-base'>
                    Sign in as User
                </Link>
            </div>
        </div>
    )
}

export default CaptainLogin
