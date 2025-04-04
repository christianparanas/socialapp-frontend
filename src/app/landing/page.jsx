import React from 'react'

function page() {
  return (
    <div> {/* Global*/}
      <div className='flex justify-between border-b border-neutral-600 pl-40 pr-40 h-16 bg-neutral-800'>  {/* nav*/}
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

      <div className='flex flex-col py-40 items-center bg-neutral-800 h-dvh'>
        <div className='flex flex-col justify-center items-center'>
            <p className='font-extrabold text-7xl'>Build in a weekend</p>
            <p className='font-extrabold text-7xl text-green-400'>Scale to millions</p>  
        </div>
        <div className='w-lg h-20 mt-10 '>
            <p className='text-center font-sans font-semibold'>
            Supabase is an open source Firebase alternative.
            Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, 
            Realtime subscriptions, Storage, and Vector embeddings.
            </p>
        </div>
        <div className='w-4xl h-20 mt-10 flex justify-center gap-6 py-6'>
            <button className='bg-green-900  px-2 py-1 rounded-md font-sans font-medium text-sm border border-green-700'>Start your project</button>
            <button className='bg-neutral-700 px-2 py-1 rounded-md font-sans font-medium text-sm border border-neutral-500'>Request a demo</button>
        </div>
      </div>
    </div>
  )
}

export default page
