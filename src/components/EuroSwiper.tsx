import React from 'react'

const EuroSwiper = (props:{src?: string, user?: string}) => {
  return (
    <div className='swiper-contain'>
            <div className="swiper-image" style={{backgroundImage: `url("${props?.src}")`}}>
                
            </div>
            <div className="swiper-text">
                <h3>{props.user}</h3>
                <a href="#">More Details</a>
            </div>
    </div>
  )
}

export default EuroSwiper