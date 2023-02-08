import React from 'react';


function MiddleNav() {
  return (
    <div>
      <div className='flex justify-center items-center space-x-16 opacity-80 '>

        <button className='p-3 border-b-4 border-blue-500'>
          <span><i class="fa-solid fa-house fa-lg"></i></span>
        </button>

        <button className='p-3 '>
          <span><i class="fa-solid fa-tv fa-lg"></i></span>
        </button>

        <button className='p-3 '>
          <span><i class="fa-solid fa-store fa-lg"></i></span>
        </button>

        <button className='p-3 '>
          <span><i class="fa-solid fa-people-group fa-lg"></i></span>
        </button>

        <button className='p-3 '>
          <span><i class="fa-solid fa-gamepad fa-lg"></i></span>
        </button>

      </div>
    </div>
  )
}

export default MiddleNav;