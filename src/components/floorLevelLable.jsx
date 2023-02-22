import React from 'react'
import cross from '../images/cross.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { updateFloor } from '../redux/homepage/homeslice';
const FloorLevelLable = ({setfloorClicked}) => {
    const navigate=useNavigate();
    const dispatch=useDispatch();

  const floorHandler=(label)=>{
    dispatch(updateFloor({}))
    if(label==='Lower Ground'){

      const time=setTimeout(() => {
        dispatch(updateFloor({
          floor:"Lower Ground",
          square:66500,
          shop:"L1",
          shopFeet:652.56 ,
          totalPrice:43395240
        }))
        clearTimeout(time)
      }, 500);
    }
    else if(label==='Ground Floor'){
      const time=setTimeout(() => {
        dispatch(updateFloor({
          floor:"Ground Floor",
          square:95000,
          shop:"G1",
          shopFeet:652.56 ,
          totalPrice: 61993200
        }))
        clearTimeout(time)
      }, 500);
    }
    else if(label==='Mezzanine'){
      const time=setTimeout(() => {
        dispatch(updateFloor({
          floor:"Mezzanine",
          square: 71500,
          shop:"M1",
          shopFeet:714.12,
          totalPrice: 51059580
        }))
        clearTimeout(time)
      }, 500);
    }
    else if(label==='First Floor'){
      const time=setTimeout(() => {
        dispatch(updateFloor({
          floor:"First Floor",
          square: 56500 ,
          shop:"F1",
          shopFeet:714.12,
          totalPrice: 40347780
        }))
        clearTimeout(time)
      }, 500);
    }
    else if(label==='Second Floor'){
      const time=setTimeout(() => {
        dispatch(updateFloor({
          floor:"Second Floor",
          square: 56500 ,
          shop:"F2",
          shopFeet:714.12,
          totalPrice: 40347780
        }))
        clearTimeout(time)
      }, 500);
    }
  }

  return (
    <>
        <div className='text-floorText flex flex-row items-center justify-center mb:justify-center sm:justify-start'>
                         <div className='flex flex-row items-center justify-center  space-x-5 '>
                            <h1 className='sm:hidden mb:hidden'>Floors</h1>
                            <div className='flex flex-row  space-x-5'>
                                <span className='bg-circle  w-12 h-12 align-middle text-center rounded-full cursor-pointer  flex items-center justify-center hover:border hover:border-secondary' onClick={()=>{floorHandler('Lower Ground')}}>LG</span>
                                <span className='bg-circle  w-12 h-12 align-middle text-center rounded-full cursor-pointer  flex items-center justify-center hover:border hover:border-secondary' onClick={()=>{floorHandler('Ground Floor')}}>G</span>
                                <span className='bg-circle  w-12 h-12 align-middle text-center rounded-full cursor-pointer  flex items-center justify-center hover:border hover:border-secondary' onClick={()=>{floorHandler('Mezzanine')}}>M</span>
                                <span className='bg-circle  w-12 h-12 align-middle text-center rounded-full cursor-pointer  flex items-center justify-center hover:border hover:border-secondary' onClick={()=>{floorHandler('First Floor')}}>1</span>
                                <span className='bg-circle  w-12 h-12 align-middle text-center rounded-full cursor-pointer  flex items-center justify-center hover:border hover:border-secondary' onClick={()=>{floorHandler('Second Floor')}}>2</span>
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