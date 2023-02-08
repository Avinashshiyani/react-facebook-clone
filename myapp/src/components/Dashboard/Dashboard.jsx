import React from 'react';
import LeftButtonDashboard from './LeftButtonDashboard/LeftButtonDashboard';
import Navbar from './Navbar/Navbar';

function Dashboard() {
  return (
    <>
    <div>
      <Navbar />
    </div>

    <div className='bg-slate-200'>
      <LeftButtonDashboard/>
    </div>

</>

  )
}

export default Dashboard;