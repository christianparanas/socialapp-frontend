import React from 'react'

function page() {
  return (
    <div> {/* Global*/}
      <div className='flex justify-between border-b border-neutral-800 pl-40 pr-40 h-16'>  {/* nav*/}
        <div className=''> {/* left nav*/}
            <ul className='flex flex-wrap'>
                <li className='flex h-16'>
                    <img src='/assets/images/logo.jpg' alt='Logo' className='w-13 h-13 rounded-full object-cover p-2 mt-0.5' />
                    <p className='p-4 font-bold'>Social app</p>
                </li>
                <li className='pl-2 p-4'>
                    <p className='text-sm font-semibold text-white pt-1 hover:text-green-600 transition-all duration-100'>Product</p>
                </li>
                <li className='pl-2 p-4'>
                    <p className='text-sm font-semibold text-white pt-1 hover:text-green-600 transition-all duration-100'>Developers</p>
                </li>
                <li className='pl-2 p-4'>
                    <p className='text-sm font-semibold text-white pt-1 hover:text-green-600 transition-all duration-100'>Enterprise</p>
                </li>
                <li className='pl-2 p-4'>
                    <p className='text-sm font-semibold text-white pt-1 hover:text-green-600 transition-all duration-100'>Pricing</p>
                </li>
                <li className='pl-2 p-4'>
                    <p className='text-sm font-semibold text-white pt-1 hover:text-green-600 transition-all duration-100'>Docs</p>
                </li>
                <li className='pl-2 p-4'>
                    <p className='text-sm font-semibold text-white pt-1 hover:text-green-600 transition-all duration-100'>Blog</p>
                </li>
            </ul>
        </div>
        <div className='border border-y-teal-500 p-4 m-4'> {/* right nav*/}
            <ul className='flex'>
                <li>
                    <p className='text-md font-light text-white mb-3'>Sign In</p>
                </li>
                <li>
                    <p className='text-md font-light text-white mb-3'>Sign Up</p>
                </li>
            </ul>
        </div>
      </div>

      <div>

      </div>
    </div>
  )
}

export default page
