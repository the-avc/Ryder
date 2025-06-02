import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const UserLogout = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            if (res.status === 200) {
                localStorage.removeItem('token');
                toast.success('Logged out successfully');
                navigate('/login');
                // console.log('User logged out successfully');
            }
        }).catch((error) => {
            toast.error(error.response?.data?.message || 'Logout failed');
            console.error(error.response?.data || error.message);
        });
    }, [token, navigate]);

    return (
        <div>UserLogout</div>
    )
}

export default UserLogout