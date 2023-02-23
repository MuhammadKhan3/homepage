import React, { useState } from 'react'
import shop from '../images/shop.png'
import floor from '../images/floorLocation.jpeg'
import FloorSvg from '../svgs/floorsvg';
import FadeIn from 'react-fade-in';
import Ground from '../svgs/ground';
import LowerGround from '../svgs/lowerGround';
import MFloor from '../svgs/mezzanine';
import Mezzannine from '../svgs/mezzanine';

const FloorBottom = ({floorData,setfloorData,MfloorHandler, SecondfloorHandler, OnefloorHandler, LgfloorHandler, GfloorHandler}) => {



  return (<>
  {/*  */}
  <section className='w-full h-full   flex flex-row items-center justify-center   mb:flex-col-reverse     sm:flex-col-reverse sm:items-end   sm:justify-end mb:justify-end '>
    <div className='bg-secondary  h-full  max-h-full text-base w-[50%] mb:w-full sm:w-full md:w-full '>
      <FadeIn className=''
       visible={Object.keys(floorData).length>0}>
       <div className='flex flex-col justify-center items-center h-auto mt-14  space-y-16 '>
          <div className='flex flex-row justify-between items-center w-[70%] mb:w-[90%] md:w-[90%] sm:w-[90%]'>
            <div>
              <h1 className='text-cinzel-68 mb:text-[2.5rem]' style={{fontFamily:'Cinzel'}}>{floorData?.floor?.split(" ")[0]} {floorData?.floor?.split(" ")[0]?.length>0 && <span className='text-cinzel-48 mb:text-[2rem]' style={{fontFamily:'Cinzel'}}>{floorData?.floor?.split(" ")[1]}</span>}</h1>
              <p className='text-floorText text-available'>3/4 Shops availabe</p>
            </div>
            <div className='flex flex-row items-start'>
               <p className='text-baseBold '>PKR {floorData?.square} Per/sq. ft.</p>
            </div>
          </div>

          <div className='flex flex-col  items-start  w-[65%] mb:w-[90%] sm:w-[90%] md:w-[90%]  '>
              <div className='flex flex-row items-center justify-between border-b-[1px] border-base w-full pb-2'>
                <h1 className='text-medium'>Shop {floorData?.shop}</h1>
                <img src={shop} className="w-[29px] h-[29px]"/>
              </div>

              <div className='text-[#8B6C69] text-area flex flex-row items-center justify-between w-[70%]  relative top-[20%]'>
                {floorData?.shopFeet} sq. ft
              </div>
          </div>
          
          <div className='flex flex-row items-center w-[70%] mb:w-[90%] sm:w-[90%] md:w-[90%]  relative top-[20%] space-x-2'>
             <span className='text-totalAmount mb:text-[3em] '>Rs {floorData?.totalPrice}</span>
             <span className='mt-5 text-[#8B6C69]'>Total Value</span>
          </div>       
       </div>
      </FadeIn>
    </div>
    {/* max-w-[85%] 
    max-h-[85%]*/}
    <div className='  w-[50%]   h-full         object-cover   sm:w-11/12 sm:max-w-full sm:mx-auto     mb:ml-0 mb:mt-1 mb:w-full sm:max-h-full mb:max-w-full '>
      <FadeIn className='!w-full !h-full flex flex-col items-center justify-center'
       visible={Object.keys(floorData).length>0}>
        {floorData.floor==='Ground Floor' ?
          <Ground/>
         : floorData.floor==='Lower Ground' ?
          <LowerGround/>
         : floorData.floor==='Mezzanine' ?
         <Mezzannine/>
         :
         <FloorSvg MfloorHandler={MfloorHandler} SecondfloorHandler={SecondfloorHandler} OnefloorHandler={OnefloorHandler} LgfloorHandler={LgfloorHandler} GfloorHandler={GfloorHandler}/>
         }
       </FadeIn>
    </div>

  </section>
  </>)
}

export default FloorBottom;