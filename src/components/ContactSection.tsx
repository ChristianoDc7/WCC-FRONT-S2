import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import '../styles/Activities.scss'

const ContactSection = () => {
    const isSmall = useMediaQuery("(max-width: 768px)")
  return (
    <div style={{padding: "5px", display:"flex", flexDirection: isSmall ? "column" : "row", color:"gray", fontSize:"14px"
                ,justifyContent:"space-between", rowGap: isSmall ? "8px" : "0"
    }}>
        <p style={isSmall ? {textAlign: "center"} : {}}>Greenwich Street New York, NY 10007</p>
        <div className="icons" style={isSmall ? {justifyContent:"center", display:"flex"}:{}}>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-twitter"></i>
        </div>
    </div>
  )
}

export default ContactSection