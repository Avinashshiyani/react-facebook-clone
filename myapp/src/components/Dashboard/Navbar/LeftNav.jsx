import React from 'react'

function LeftNav() {
  return (
    <div className='flex justify-center items-center'>

      <div className='p-2'>
        <span>
        <i className="fa-brands fa-facebook fa-3x"></i>
        </span>
      </div>

      <div className=''>
          <input type="text"  placeholder='Search Facebook' className='rounded-3xl py-2 p-2 bg-gray-200'/>
      </div>

    </div>
  )
}

export default LeftNav;