import React from 'react'
import cross from '../images/cross.png'
import { useNavigate } from 'react-router-dom'
const FloorLevelLable = ({setfloorClicked,floorData,setfloorData}) => {
    const navigate=useNavigate();
    const SecondfloorHandler=()=>{
      setfloorData({})  
      const time=setTimeout(() => {      
        setfloorData({
          floor:"Second floor",
          square:356500,
          shop:"S3",
          shopFeet:1863.75,
          totalPrice:63151875
        })
        clearTimeout(time)
      },500)
    }
    const OnefloorHandler=()=>{
      setfloorData({})
      const time=setTimeout(() => {
        setfloorData({
          floor:"One floor",
          square:356500,
          shop:"S3",
          shopFeet:1863.75,
          totalPrice:63151875
        })
        clearTimeout(time)
      }, 500);
    }

    const MfloorHandler=()=>{
      setfloorData({})

      const time=setTimeout(() => {
        setfloorData({
          floor:"M floor",
          square:356500,
          shop:"S3",
          shopFeet:1863.75,
          totalPrice:63151875
        })
        clearTimeout(time)
      }, 500);
    }

    const GfloorHandler=()=>{
      setfloorData({})

      const time=setTimeout(() => {
        setfloorData({
          floor:"Groudn floor",
          square:356500,
          shop:"S3",
          shopFeet:1863.75,
          totalPrice:63151875
        })
        clearTimeout(time)
      }, 500);
    }

    const LgfloorHandler=()=>{
      setfloorData({})

      const time=setTimeout(() => {
        setfloorData({
          floor:"Lg floor",
          square:356500,
          shop:"S3",
          shopFeet:1863.75,
          totalPrice:63151875
        })
        clearTimeout(time)
      }, 500);
    }

  return (
    <>
        <div className='text-floorText flex flex-row items-center justify-center mb:justify-start sm:justify-start'>
                         <div className='flex flex-row items-center justify-center  space-x-5 '>
                            <h1 className='sm:invisible mb:invisible'>Floors</h1>
                            <div className='flex flex-row  space-x-5'>
                                <span className='bg-circle  w-12 h-12 align-middle text-center rounded-full cursor-pointer  flex items-center justify-center hover:border hover:border-secondary' onClick={OnefloorHandler}>LG</span>
                                <span className='bg-circle  w-12 h-12 align-middle text-center rounded-full cursor-pointer  flex items-center justify-center hover:border hover:border-secondary' onClick={OnefloorHandler}>G</span>
                                <span className='bg-circle  w-12 h-12 align-middle text-center rounded-full cursor-pointer  flex items-center justify-center hover:border hover:border-secondary' onClick={MfloorHandler}>M</span>
                                <span className='bg-circle  w-12 h-12 align-middle text-center rounded-full cursor-pointer  flex items-center justify-center hover:border hover:border-secondary' onClick={OnefloorHandler}>1</span>
                                <span className='bg-circle  w-12 h-12 align-middle text-center rounded-full cursor-pointer  flex items-center justify-center hover:border hover:border-secondary' onClick={SecondfloorHandler}>2</span>
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