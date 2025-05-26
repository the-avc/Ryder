import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

const CaptainProtector = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {

        if (!token) {
            navigate('/captain-login');
        }
    }, [token, navigate]);

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
            if (res.status === 200) {
                setIsLoading(false);
            }
        })
        .catch(error => {
            console.error(error.response?.data || error.message);
            localStorage.removeItem('token');
            navigate('/captain-login');
        }
        )

    if (isLoading) {
        return <div>Loading...</div>;
    }



    return (
        <>
            {token && children}
        </>
    )
}

export default CaptainProtector