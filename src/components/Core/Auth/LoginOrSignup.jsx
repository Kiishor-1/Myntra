import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { setSignupData } from '../../../Slices/authSlice';
import { useDispatch } from 'react-redux';
import { sendOtp } from '../../../services/operations/authAPI';


export default function LoginOrSignup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
  })

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    console.log("clicked")
    e.preventDefault()

    if (!formData.email) {
      toast.error("Please Fill All The Required Field");
      return
    }
    const signupData = {
      ...formData,
    }

    // Setting signup data to state
    // To be used after otp verification
    // dispatch(setSignupData(signupData))
    dispatch(setSignupData(formData));
    // Send OTP to user for verification
    dispatch(sendOtp(formData.email, navigate))

    // Reset
    setFormData({
      email: "",
    })
  }

  return (
    <div className='h-[calc(100vh-5rem)]  w-screen flex justify-center bg-[#ffecf4]'>
      <div className="w-[25rem] my-[2rem] py-[3rem] px-[2.4rem] flex flex-col gap-8 bg-white">
        <h2 className='text-center text-xl font-[600] text-gray-600'>Login <span className='text-gray-600 text-[1rem]'>or</span> Signup</h2>
        <form onSubmit={handleOnSubmit} className='flex flex-col gap-8 w-[100%]'>
          <input onChange={handleChange} name='email' type="text" value={formData.email} className='border px-3 py-[0.45rem] text-[12px] w-full focus:outline-none focus:border-black' placeholder='Enter email ID' />
          <span className='text-[12px]'>By Continuing, I agree to the <span className='text-[#EF7C8E] font-bold cursor-pointer'>Terms of Use & Privacy Policy</span></span>
          <button className='bg-pink-700 text-white py-[0.4rem] text-center font-bold text-[15px] cursor-pointer'>Continue</button>
        </form>
        <span className='text-[12px]'>
          Have trouble logging in?<span className='text-[#EF7C8E] font-bold cursor-pointer'>Get help</span>
        </span>
      </div>
    </div>
  )
}
