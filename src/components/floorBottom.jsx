import React, { useState } from 'react'
import shop from '../images/shop.png'
import floor from '../images/floorLocation.jpeg'
import FloorSvg from './floorsvg';
import FadeIn from 'react-fade-in';

const FloorBottom = ({floorData,setfloorData}) => {


  const S1Handler=()=>{
    setfloorData({
      floor:"Second floor",
      square:56500,
      shop:"S1",
      shopFeet:763.75,
      totalPrice:43151875
    })
  }
  
  const S2Handler=()=>{
    setfloorData({
      floor:"Second floor",
      square:156500,
      shop:"S2",
      shopFeet:863.75,
      totalPrice:53151875
    })
  }

  const S3Handler=()=>{
    setfloorData({
      floor:"Second floor",
      square:356500,
      shop:"S3",
      shopFeet:1863.75,
      totalPrice:63151875
    })
  }



  const S4Handler=()=>{
    setfloorData({
      floor:"Second floor",
      square:1356500,
      shop:"S4",
      shopFeet:2863.75,
      totalPrice:63151875
    })
  }
  console.log(floorData.l)
  return (<>
  <section className='w-full min-h-full flex flex-row  items-start sm:flex-col mb:flex-col'>
    <div className='bg-secondary  h-[100%]  max-h-full text-base w-[50%] mb:w-full sm:w-full md:w-full '>
      <FadeIn className=''
      visible={Object.keys(floorData).length>0}
      >

       <div className='flex flex-col justify-center items-center h-auto mt-14  space-y-16 '>
          <div className='flex flex-row justify-between items-center w-[70%] mb:w-[90%] md:w-[90%] sm:w-[90%]'>
            <div>
              <h1 className='text-cinzel-68 mb:text-[2.5rem]' style={{fontFamily:'Cinzel'}}>{floorData?.floor?.split(' ')[0]} <span className='text-cinzel-48 mb:text-[2rem]' style={{fontFamily:'Cinzel'}}>{floorData?.floor?.split(' ')[1]}</span></h1>
              <p className='text-floorText text-available'>3/4 Shops availabe</p>
            </div>
            <div className='flex flex-row items-start'>
               <p className='text-baseBold '>PKR {floorData?.square} Per/sq. ft.</p>
            </div>
          </div>
          <div className='flex flex-col  items-start  w-[65%] mb:w-[90%] sm:w-[90%] md:w-[90%]  space-y-6 '>
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
    <div className='max-h-[35%]   max-w-[85%]  object-cover mx-auto mt-[5%] sm:w-11/12 sm:max-w-full sm:mx-auto     mb:ml-0 mb:mt-1 mb:w-full sm:max-h-full mb:max-w-full'>
      {/* <map name='tabs'>
         <area 
            shape='circle' 
            href='#one' 
            coords='60, 189, 24'
            onClick={S1Handler}
         />
         <area 
            shape='circle' 
            href='#two' 
            coords='167, 189, 24'
            onClick={S2Handler}
         />
         <area 
            shape='circle' 
            href='#one' 
            coords='278, 188, 24'
            onClick={S3Handler}
         />
         <area 
            shape='circle' 
            href='#one' 
            coords='383, 188, 24'
            onClick={S4Handler}
         />
      <img src={floor} useMap="#tabs" className=" h-full  object-cover w-full"/>    
      </map> */}
      <FloorSvg/>
    </div>
  </section>
  </>)
}

export default FloorBottom