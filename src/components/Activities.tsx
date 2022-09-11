import React from 'react'
import { Activity } from './Activity'
import '../styles/Activities.scss'
import { Snorkle } from '../widget/Snorkle'
import Mountain from '../widget/Mountain'
import { Kayak } from '../widget/Kayak'

export const Activities = () => {
  return (
    <div className='activity-wrapper'>
      <Activity icon={<Snorkle height='40px'/>} text={<> <b>36</b> hours <br /> Snorkeling</>} imageList={[9,10,11]}/>
      <Activity icon={<Mountain height='40px' className='mountain'/>} text={<><b>64</b> hours <br /> hiking</>}  imageList={[12,19]}/>
      <Activity icon={<Kayak height='40px' className='kayak'/>} text={<><b>42</b> hours <br /> Kayaking</>} imageList={[14,15,16,17]}/>
    </div>
  )
}
