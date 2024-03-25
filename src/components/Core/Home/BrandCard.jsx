import React from 'react'

export default function BrandCard({image}) {
    const style = {
        width: "13rem",
        height: "18rem",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
      return (
        <div className="z-[-1] border" style={style}>
    
        </div>
      )
}
