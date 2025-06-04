import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-9xl font-bold text-[#04665a] mb-4">
          404
        </h1>
        <h2 className="text-2xl font-medium text-gray-400 mb-6">
          Page Not Found
        </h2>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 border border-[#04665a] text-[#04665a] rounded-md
                   hover:bg-[#04665a] hover:text-white transition-all duration-300 cursor-pointer"
        >
          Go Back Home
        </button>
      </div>
    </div>
  )
}

export default ErrorPage
