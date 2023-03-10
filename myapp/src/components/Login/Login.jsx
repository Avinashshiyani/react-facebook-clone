import React from 'react'
import Celebrity from './Celebrity';
import Form from './Form';
import Intro from './Intro';


function Login() {
  return (
    
            
        <div className='grid justify-center h-[100vh] md:flex items-center'>
            <div className='grid justify-center items-center'>
                <Intro />
            </div> 
            <div>
                <Form />
                <Celebrity />
            </div>
        </div>

     
  )
};

export default Login;