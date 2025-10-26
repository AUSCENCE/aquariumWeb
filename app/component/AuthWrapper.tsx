type WrapperProps = {
    children: React.ReactNode;
}
import React from 'react'
import { GlassWater } from 'lucide-react';

const AuthWrapper = ({children} : WrapperProps) => {
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
         <div className=' flex items-center mb-6 mt-16'>
            <div className='bg-primary-content text-primary rounded-full p-2'>
               <GlassWater className ='w-6 h-6'/> 
            </div>
            <span className='text-3xl font-bold ml-4'>
                 <span className='text-primary'>AQUARIUM</span>
            </span>
         </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default AuthWrapper