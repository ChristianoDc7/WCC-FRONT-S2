import React from "react";

export const Curve = (props:{height?: string, width?: string, rotation?:string, style?: React.CSSProperties, className?: string}) => {
  return(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="436"
      height="836"
      version="1"
      viewBox="0 0 327 627"
      {...props}
    >
      <path
        d="M1960 6186c184-398 230-875 126-1301-41-166-92-300-191-500-109-221-197-362-469-758-236-342-343-514-435-697-257-507-293-929-126-1458 59-190 69-240 69-372-1-151-27-259-99-405C724 468 530 265 235 65L140 0h559l103 77c57 42 162 136 234 207 189 189 286 342 351 553 25 81 27 101 27 263 0 159-3 184-27 270-15 52-38 136-52 185-123 438-32 893 275 1376 135 214 272 387 761 965 478 566 714 967 793 1354 46 228 41 557-15 891-10 64-19 119-19 123 0 3-272 6-604 6h-605l39-84z"
        transform="matrix(.1 0 0 -.1 0 627)"
      ></path>
    </svg>
  );
};
