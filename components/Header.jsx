import React from 'react'
import header_img from '../assets/header.png'

const Header = () => {
  return (
    <div className='flex justify-center items-center bg-violet-500 p-4 mb-4 rounded-md'>
      <div className='flex items-center'>
        <img src={header_img} alt="Header" className='w-150 h-20 mr-4' />
        <h1 className='text-gray-800 text-2xl font-bold'>My Todo App</h1>
      </div>
    </div>
  )
}

export default Header
