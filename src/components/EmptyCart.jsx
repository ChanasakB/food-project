import React from 'react'
import EmptyIcon from "./icon/EmptyIcon";

const EmptyCart = () => {
  return (
    <div className={`flex flex-col gap-[10px] pt-[10px] items-center` }>
       
        <EmptyIcon />
    
        <h1 className={`text-brown font-semibold`}>Your added items will appear here</h1>
    </div>
  )
}

export default EmptyCart