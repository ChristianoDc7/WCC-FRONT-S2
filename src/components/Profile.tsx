import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery';

export const Profile = () => {
  const isSmall = useMediaQuery("(max-width:768px)");
  return (
    <div className='profile'>
      <div className="pictos" style={!isSmall ? {alignSelf:"flex-end"} : {}} >
          <div className="pdp"></div>
          <span >
            edit
          </span>
          <div className="infos">
              <h3>Helena Brauer</h3>
              <p>Manager</p>
              <p style={{fontSize: "12px", color:"gray"}}>helena@brauer.com</p>
          </div>
      </div>
    </div>
  )
}
