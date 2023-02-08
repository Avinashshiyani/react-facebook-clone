import React from 'react';


function RightNav() {
  return (
    <div>
      <div className='flex space-x-2'>

        <div className='rounded-full bg-gray-200 p-2 px-3'>
            <button><i class="fa-solid fa-bars fa-lg"></i></button>
        </div>

        <div className='rounded-full bg-gray-200 p-2 px-3'>
            <button><i class="fa-brands fa-facebook-messenger fa-lg"></i></button>
        </div>

        <div className='rounded-full bg-gray-200 p-2 px-3'>
            <button><i class="fa-solid fa-bell fa-lg"></i></button>
        </div>

        <div className='rounded-full bg-gray-200 p-2 px-3'>
            <button><i class="fa-solid fa-person fa-lg"></i></button>
        </div>

      </div>
    </div>
  )
}

export default RightNav