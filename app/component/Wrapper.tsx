type WrapperProps = {
    children: React.ReactNode;
}

import React from 'react'
import { FolderGit2 } from 'lucide-react';
import Navbar from './Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wrapper = ({children} : WrapperProps) => {
  return (
    <div className=''>
        <Navbar/>
        <div className='px-5 md:px-[10%] mt-8 mb-10'>
           <ToastContainer 
              position='top-right'
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              pauseOnHover
              draggable
            />
            {children}
        </div>
    </div>
  )
}

export default Wrapper