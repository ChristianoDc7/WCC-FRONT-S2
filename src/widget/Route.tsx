import React from "react";

export function Route(props:{height?: string, width?: string, rotation?:string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 508 508"
      version="1.1"
      viewBox="0 0 508 508"
      xmlSpace="preserve"
      {...props}
    >
      <circle cx="254" cy="254" r="254" fill="#324A5E"></circle>
      <circle cx="254" cy="254" r="193.2" fill="#84DBFF"></circle>
      <circle cx="254" cy="254" r="166.4" fill="#FFF"></circle>
      <path fill="#FF7058" d="M341.2 166.8L227.2 227.2 280.8 280.8z"></path>
      <path fill="#324A5E" d="M166.8 341.2L280.8 280.8 227.2 227.2z"></path>
      <circle cx="254" cy="254" r="21.2" fill="#FFD05B"></circle>
      <g fill="#2C9984">
        <circle cx="250.8" cy="121.2" r="13.2"></circle>
        <circle cx="250.8" cy="382" r="13.2"></circle>
        <circle cx="381.6" cy="251.6" r="13.2"></circle>
        <circle cx="120.4" cy="251.6" r="13.2"></circle>
      </g>
    </svg>
  );
}