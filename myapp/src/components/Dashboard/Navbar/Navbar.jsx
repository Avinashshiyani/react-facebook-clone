import React from 'react';
import LeftNav from './LeftNav';
import MiddleNav from './MiddleNav';
import RightNav from './RightNav'; 

function Navbar() {
  return (
    <div className='flex h-16 justify-between items-center px-2'>
        <LeftNav />
        <MiddleNav />
        <RightNav />
    </div>
  )
}

export default Navbar;