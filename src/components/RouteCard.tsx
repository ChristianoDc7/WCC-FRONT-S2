import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery';
import '../styles/common.scss'


export const RouteCard = (props:{title?:string, icon?: React.ReactElement}) => {
  const isSmall = useMediaQuery("(max-width:768px)");
  return (
    <div className='card-route' style={isSmall ? {width:"50%", height:"200px"} : {}}>
        {props.icon}
        <div className="swiper-text">
            <h4>{props.title}</h4>
            <a href="#">View Details</a>
        </div>
    </div>
  )
}
