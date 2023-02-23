import React from 'react'
import cross from '../images/cross.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateFloor } from '../redux/homepage/homeslice';
const FloorLevelLable = ({setfloorClicked}) => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const FirstFloor=useSelector(state=>state.homeReducer.FirstFloor);
    const Lg=useSelector(state=>state.homeReducer.LowerGround);
    const Mezzanine=useSelector(state=>state.homeReducer.Mezzanine);
    const GroundFloor=useSelector(state=>state.homeReducer.GroundFloor);
    const SecondFloor=useSelector(state=>state.homeReducer.SecondFloor)


  const findSoldTag=(data)=>{
      const index=data.findIndex((item)=>item.sold!==true);
      return data[index];
  }

  const floorHandler=(label)=>{
    dispatch(updateFloor({}))
    if(label==='Lower Ground'){

      const time=setTimeout(() => {
        dispatch(updateFloor(findSoldTag(Lg)))
        clearTimeout(time)
      }, 500);
    }
    else if(label==='Ground Floor'){
      
      const time=setTimeout(() => {
        // findSoldTag()
        dispatch(updateFloor(findSoldTag(GroundFloor)))
        clearTimeout(time)
      }, 500);
    }
    else if(label==='Mezzanine'){
      const time=setTimeout(() => {
        
        dispatch(updateFloor(findSoldTag(Mezzanine)))

        clearTimeout(time)
      }, 500);
    }
    else if(label==='First Floor'){
      const time=setTimeout(() => {
        
        dispatch(updateFloor(findSoldTag(FirstFloor)))
        clearTimeout(time)
      }, 500);
    }
    else if(label==='Second Floor'){
      const time=setTimeout(() => {
        dispatch(updateFloor(findSoldTag(SecondFloor)))

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