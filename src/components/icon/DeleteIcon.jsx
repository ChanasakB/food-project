import { useState } from 'react'

function DeleteIcon() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      fill="transparent"
      viewBox="0 0 10 2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <path fill={isHovered ? '#C83B0E' : 'white'}
       d="M0 .375h10v1.25H0V.375z"></path>
    </svg>
  )
}

export default DeleteIcon
