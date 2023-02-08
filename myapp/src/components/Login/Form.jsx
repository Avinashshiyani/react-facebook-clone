import React from 'react'

function Form() {
  return (
    <div className='grid justify-center items-center'>

      <div className='grid w-96 shadow-2xl border-2 space-y-4 p-3 rounded-lg'>

        <input type="email"    className='p-3 border-2 rounded-lg' placeholder='Email address or phone number' />
        <input type="password" className='p-3 border-2 rounded-lg' placeholder='Password' />
        <input type="button"   className='p-2 bg-blue-600 text-white cursour-pointer text-lg font-bold' value="Log in" />
        <span className='text-center text-blue-600'>
          <a href="">Forgotten password?</a>
        </span>
        <div className='h-0.5 bg-gray-200 rounded-full'></div>
        <div className='grid justify-center text-lg space-y-3'>
          <input type="button" className='p-3 bg-green-500 text-white rounded-lg' value="Create New Account" />
          <input type="button" className='p-3 border-2 border-blue-600 rounded-lg' value="Skip >>" />
        </div>

      </div>

    </div>
  )
}

export default Form