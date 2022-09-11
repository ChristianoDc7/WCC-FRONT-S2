import React from "react";

export const Compass = (props:{height?: string, width?: string, rotation?:string}) => {
  return (
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 508 508"
      {...props}
    >
      <circle style={{fill:"#324A5E"}} cx="254" cy="254" r="254" />
      <circle style={{fill:"#84DBFF"}} cx="254" cy="254" r="193.2" />
      <circle style={{fill:"#FFFFFF"}} cx="254" cy="254" r="166.4" />
      <polygon
        style={{fill:"#FF7058"}}
        points="341.2,166.8 227.2,227.2 280.8,280.8 "
      />
      <polygon
        style={{fill:"#324A5E"}}
        points="166.8,341.2 280.8,280.8 227.2,227.2 "
      />
      <circle style={{fill:"#FFD05B"}} cx="254" cy="254" r="21.2" />
      <g>
        <circle style={{fill:"#2C9984"}} cx="250.8" cy="121.2" r="13.2" />
        <circle style={{fill:"#2C9984"}} cx="250.8" cy="382" r="13.2" />
        <circle style={{fill:"#2C9984"}} cx="381.6" cy="251.6" r="13.2" />
        <circle style={{fill:"#2C9984"}} cx="120.4" cy="251.6" r="13.2" />
      </g>
    </svg>
  );
};
