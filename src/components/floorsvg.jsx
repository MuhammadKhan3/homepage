import React from 'react'

const FloorSvg = () => {
  return (
    <div className='w-full h-full'>
          <svg width='500' height='400' className='w-full h-full'>
              <polyline points="0,10,0,420 " className='cursor-pointer fill-red-50 w-full h-full !stroke-base stroke-[15px]'  />

              <rect  x='10' y='15' width='5' height='10'   className=' fill-red-50  !stroke-base stroke-[10px] '  />
             
              <rect  x='20' y='13' width='10' height='3'   className='fill-base   !stroke-base stroke-[5px] '  />
             
              <line x1='0' y1='11' x2='390' y2='11' className=' fill-base  !stroke-base stroke-[2px] ' />
              <line x1='0' y1='17' x2='390' y2='17' className=' fill-base  !stroke-base stroke-[2px] ' />
          </svg>
    </div>
  )
}

export default FloorSvg