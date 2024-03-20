import React from 'react'

export default function ProfileOption() {
    const myntra_ele = [
        'Orders',
        'Wishlist',
        'Gift Cards',
        'Contact Us',
        'Myntra InsiderNew',
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
        <h4 className='text-red-600'>Welcome</h4>
        <p className='font-normal'>To access accounts and manage orders</p>
        <button className='px-3 py-2 my-4 border-2 rounded-md text-red-700 font-semibold'>Login/Signup</button>
      </div>
      <hr />
      <ul className="leading-4 py-3">
        {
            myntra_ele.map((item, id)=>(
                <li className='leading-6 font-normal' key={id}>{item}</li>
            ))
        }
      </ul>
      <hr />
      <ul className="leading-4 py-3">
        {
            myntra_services.map((item, id)=>(
                <li className='leading-6 font-normal' key={id}>{item}</li>
            ))
        }
      </ul>
    </div>
  )
}
