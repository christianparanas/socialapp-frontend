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
        <div className=''> {/* right nav*/}
            <ul className='flex flex-wrap'>
                <li className='pl-4  pt-4'>
                    <button className='bg-neutral-800 border border-neutral-600 text-white py-1 px-2 rounded-lg flex items-center justify-center gap-3 mb-4 text-sm font-semibold hover:bg-neutral-700 hover:border-neutral-500 transition-all duration-200'>
                        <p className='text-xs font-extralight text-white '>Sign Up</p>
                    </button>

                </li>
                <li className='pl-2 p-4'>
                    <button className='bg-green-800 border border-green-600 text-white py-1 px-2 rounded-lg flex items-center justify-center gap-3 mb-4 text-sm font-semibold hover:border-green-500 hover:bg-green-700 ease-in-out transition-all duration-200' >
                        <p className='text-xs font-extralight text-white '>Sign In</p>
                    </button>
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
