import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";
import { logout } from '../../services/operations/authAPI';

export default function ProfileOption() {
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myntra_ele = [
    'Orders',
    'Wishlist',
    'Gift Cards',
    'Contact Us',
    'Myntra Insider',
  ];
  const myntra_services = [
    'Myntra Credit',
    'Coupons',
    'Saved Cards',
    'Saved VPA',
    'Saved Addresses'
  ]
  return (
    <div className='px-4 py-3 text-[14.5px] absolute border-2 right-[2rem] top-[5.1rem] hidden group-hover:block shadow-md h-[65vh] w-[20vw] bg-white'>
      <div className="">
        <h4 className='text-red-600 text-xl mb-2'>Welcome <br /><span className='text-[1rem] text-gray-800'>{user?.email}</span></h4>
        <p className='font-normal mb-3'>To access accounts and manage orders</p>
        {!user &&
          <Link to="/login" className='w-[7rem] px-3 py-2 mt-5 border-2 rounded-md text-red-700 font-semibold hover:border-red-700'>
            Login / Signup
          </Link>
        }
      </div>
      <hr className='mt-3' />
      <ul className="leading-4 py-3">
        {
          myntra_ele.map((item, id) => (
            <li className='leading-6 font-normal' key={id}>{item}{item === 'Myntra Insider' && <i className='bg-red-600 text-white px-1 text-[12px] ml-1'>New</i>}</li>
          ))
        }
      </ul>
      <hr />
      <ul className="leading-4 py-3">
        {
          myntra_services.map((item, id) => (
            <li className='leading-6 font-normal' key={id}>{item}</li>
          ))
        }
      </ul>
      {
        user &&
        <button onClick={() => {
          dispatch(logout(navigate))
        }} className='flex gap-2 items-center text-red-600'>Logout <CiLogout /></button>
      }
    </div>
  )
}
