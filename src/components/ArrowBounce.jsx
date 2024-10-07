import React from 'react'
import { BsArrowDown } from "react-icons/bs";

const ArrowBounce = () => {
  return (
    <div className="absolute bottom-0 sm:bottom-5 animate-bounce text-zinc-500">
      <BsArrowDown size={20} />
    </div>
  )
}

export default ArrowBounce;