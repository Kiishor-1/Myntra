import React from 'react'
import CardBg from '../../../assets/images/MyntraFabri.jpg'

export default function OfferCard({image, offer}) {
  const style = {
    width: "13rem",
    height: "18rem",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }
  const offerStyle = {
    backgroundImage:`url(${CardBg})`,
  }
  return (
    <div className="relative z-[-1] border" style={style}>
      <div style={offerStyle} className="h-[6rem] w-[12rem] rounded-[3px] absolute bottom-2 left-[0.4rem] right-[0.4rem] flex flex-col justify-center items-center opacity-70">
        <p className='opacity-100 text-white textx-[1.2rem]'>{offer.category}</p>
        <p className='opacity-100 text-white text-3xl font-semibold'>{offer.off} OFF</p>
        <p className='opacity-100 text-white text-[13px] cursor-pointer'>Shop Now</p>
      </div>
    </div>
  )
}

