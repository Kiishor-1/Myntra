import React from 'react'

export default function LoginOrSignup() {
  return (
    <div className='h-[calc(100vh-5rem)]  w-screen flex justify-center bg-[#ffecf4]'>
      <div className="w-[25rem] my-[2rem] py-[3rem] px-[2.4rem] flex flex-col gap-8 bg-white">
        <h2 className='text-center text-xl font-[600] text-gray-600'>Login <span className='text-gray-600 text-[1rem]'>or</span> Signup</h2>
        <form action="" className='flex flex-col gap-8'>
          <input type="text" className='border px-3 py-[0.45rem] text-[12px] w-full focus:outline-none focus:border-black' placeholder='Enter email ID' />
          <span className='text-[12px]'>By Continuing, I agree to the <span className='text-[#EF7C8E] font-bold cursor-pointer'>Terms of Use & Privacy Policy</span></span>
          <p className='text-xl bg-pink-700 text-white py-[0.4rem] text-center font-bold text-[15px] cursor-pointer'>Continue</p>
        </form>
        <span className='text-[12px]'>
          Have trouble logging in?<span className='text-[#EF7C8E] font-bold cursor-pointer'>Get help</span>
        </span>
      </div>
    </div>
  )
}
