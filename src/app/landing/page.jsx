import React from 'react'

function page() {
  return (
    <div> {/* Global*/}
      <div className='flex justify-between border border-amber-200'>  {/* nav*/}
        <div className='border border-b-blue-500 p-4 m-4'> {/* left nav*/}
            <ul className='flex'>
                <li className='flex'>
                    <img src='/assets/images/logo.jpg' alt='Logo' className='w-13 h-13 rounded-full object-cover p-1 m-1' />
                    <p>Social app</p>
                </li>
                <li className='pl-2'>
                    <p className='text-md font-semibold text-white mb-3'>Product</p>
                </li>
                <li className='pl-2'>
                    <p className='text-3xl font-light text-white mb-3'>Developers</p>
                </li>
                <li className='pl-2'>
                    <p className='text-3xl font-light text-white mb-3'>Enterprise</p>
                </li>
                <li className='pl-2'>
                    <p className='text-3xl font-light text-white mb-3'>Pricing</p>
                </li>
                <li className='pl-2'>
                    <p className='text-3xl font-light text-white mb-3'>Docs</p>
                </li>
                <li className='pl-2'>
                    <p className='text-3xl font-light text-white mb-3'>Blog</p>
                </li>
            </ul>
        </div>
        <div className='border border-y-teal-500 p-4 m-4'> {/* right nav*/}
            <ul className='flex'>
                <li>
                    <p className='text-3xl font-light text-white mb-3'>Sign In</p>
                </li>
                <li>
                    <p className='text-3xl font-light text-white mb-3'>Sign Up</p>
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
