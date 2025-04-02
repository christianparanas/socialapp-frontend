import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'


export default function SignUp() {
export default function SignUp() {
  return (
    <div className='h-screen'>
      <div className=' md:justify-start w-full md: p-0 grid md:grid-cols-[1fr_2fr] grid-cols-1'>
        <div className='bg-neutral-900 p-4 border-r border-neutral-600'>
          <nav className=''>
            <img src='/assets/images/logo.jpg' alt='Logo' className='w-13 h-13 rounded-full object-cover p-1 m-1' />
          </nav>
        </div>
       <div className=''> 
       </div>
      </div>
     

      <div className='grid md:grid-cols-[1fr_2fr] grid-cols-1 h-full'>
        {/* Left: Sign-in Form */}
        <div className='bg-neutral-900 flex flex-col px-6 py-6 md:px-23 md:py-3 border-b md:border-r border-neutral-700 '>
        <div className='bg-neutral-900 flex flex-col px-6 py-6 md:px-23 md:py-3 border-b md:border-r border-neutral-700 '>
          <p className='text-3xl font-light text-white mb-3'>Welcome back</p>
          <p className='text-gray-400 mb-8 text-[12px] font-semibold'>Sign in to your account</p>
          
          <button className='w-full bg-neutral-800 border border-neutral-700 text-white py-3 rounded-lg flex items-center justify-center gap-3 mb-4 text-sm font-semibold hover:border-neutral-500 transition-all duration-200'>
            <FaGithub className='text-xl' /> Continue with GitHub
          </button>
          
          <button className='w-full bg-neutral-800 border border-neutral-600 text-white py-3 rounded-lg flex items-center justify-center gap-3 mb-4 text-sm font-semibold'>
            <FaGoogle className='text-xl' /> Continue with Google
          </button>


          <div className='w-full flex items-center my-6'>
            <div className='flex-grow border-t border-gray-700'></div>
            <span className='mx-4 text-gray-400'>or</span>
            <div className='flex-grow border-t border-gray-700'></div>
          </div>
          <span className='text-[13px] pb-2 opacity-60'>Email</span>
          <input 
            type='email' 
            placeholder='you@example.com' 
            className='w-full p-[10px] bg-neutral-800 rounded-lg bg-gray-850 text-white border border-gray-700 mb-4 text-xs' 
          />
          <div className='flex'>
          <div className='flex'>
            <div className='text-[13px] pb-2 opacity-60'>Password</div>
            <div className='w-full text-right text-gray-400 text-[13px] opacity-50'>Forgot Password?</div>
          </div> 
          <input 
            type='password' 
            placeholder='●●●●●●' 
            className='w-full p-[10px] bg-neutral-800 rounded-lg bg-gray-850 text-white border border-gray-700 mb-2 text-xs' 
          />

          <button className='w-full bg-green-800 text-white py-2 rounded-lg text-lg mb-6 mt-7 border border-green-600 text-[15px] font-extralight hover:bg-green-700 transition-all duration-200'>Sign In</button>
          <div className='flex flex-col-2 justify-center'>
            <p className='text-gray-400 text-xs text-center pr-1 '>Have an account? </p>
            <span className='text-white cursor-pointert text-center underline text-sm'>Sign In Now </span>
             
          </div>
        </div>

        {/* Right: Quote Section */}
        <div className='flex flex-col justify-center items-center text-white w-full h-full md:h-screen  md: px-6'>
          <p className='text-2xl md:text-4xl italic text-gray-300 pb-6 p-6 md:p-30 leading-relaxed text-justify'>
        <div className='flex flex-col justify-center items-center text-white w-full h-full md:h-screen  md: px-6'>
          <p className='text-2xl md:text-4xl italic text-gray-300 pb-6 p-6 md:p-30 leading-relaxed text-justify'>
            “Social media isn’t just about posts—it’s about real connections, creativity, and community. Share, inspire, and grow together!”
          </p>
          <div className='flex items-center gap-4 pb-50'>
            <img src='/assets/images/women.png' className='w-12 h-12 rounded-full back '/> 
            <span className='text-gray-400 text-lg'>@janedoe</span>
          </div>
        </div>
      </div>
    </div>
  )
}
