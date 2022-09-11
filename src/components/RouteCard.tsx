import React from 'react'
import '../styles/common.scss'
import { Compass } from '../widget/Compass'

export const RouteCard = (props:{title?:string, icon?: React.ReactElement}) => {
  return (
    <div className='card-route'>
        {props.icon}
        <div className="swiper-text">
            <h3>{props.title}</h3>
            <a href="#">View Details</a>
        </div>
    </div>
  )
}
