import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery';

const EuroSwiper = (props:{src?: string, user?: string}) => {
  const isSmall = useMediaQuery("(max-width:768px)");
  return (
    <div className='swiper-contain' style={isSmall ? {flexDirection: "column-reverse", height:"auto"} : {}}>
            <div className="swiper-image" style={{backgroundImage: `url("${props?.src}")`, 
            ...(isSmall ? {
                height: "50vh",
                width:"100%"
            } : {})}}>
                
            </div>
            <div className="swiper-text" style={isSmall ? {flexDirection: "row", display:"flex", alignItems:"center",
                justifyContent:"center", columnGap:"10px"
          } : {}}>
                <h3>{props.user}</h3>
                <a href="#">More Details</a>
            </div>
    </div>
  )
}

export default EuroSwiper