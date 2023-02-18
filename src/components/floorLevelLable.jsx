import React from 'react'
import cross from '../images/cross.png'
import { useNavigate } from 'react-router-dom'
const FloorLevelLable = ({setfloorClicked}) => {
    const navigate=useNavigate();
  return (
    <>
        <div className='text-floorText flex flex-row items-center justify-center mb:justify-start sm:justify-start'>
                         <div className='flex flex-row items-center justify-center  space-x-5 '>
                            <h1 className='sm:invisible mb:invisible'>Floors</h1>
                            <div className='flex flex-row  space-x-5'>
                                <span className='bg-circle  w-12 h-12 align-middle text-center rounded-full cursor-pointer  flex items-center justify-center hover:border hover:border-secondary'>LG</span>
                                <span className='bg-circle  w-12 h-12 align-middle text-center rounded-full cursor-pointer  flex items-center justify-center hover:border hover:border-secondary'>G</span>
                                <span className='bg-circle  w-12 h-12 align-middle text-center rounded-full cursor-pointer  flex items-center justify-center hover:border hover:border-secondary'>M</span>
                                <span className='bg-circle  w-12 h-12 align-middle text-center rounded-full cursor-pointer  flex items-center justify-center hover:border hover:border-secondary'>1</span>
                                <span className='bg-circle  w-12 h-12 align-middle text-center rounded-full cursor-pointer  flex items-center justify-center hover:border hover:border-secondary'>2</span>
                            </div>
                        </div>
                        <div className='bg-cross  w-12 h-12 align-middle text-center rounded-full cursor-pointer  flex items-center justify-center relative left-[20%] sm:left-[10%] mb:hidden' onClick={()=>{setfloorClicked("")}}>
                            <img src={cross} className="w-5 h-fit"/>
                        </div>
        </div>
    </>
  )
}

export default FloorLevelLable