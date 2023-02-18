import React from 'react'
import shop from '../images/shop.png'
import floor from '../images/floorLocation.jpeg'
const FloorBottom = () => {
  return (<>
  <section className='w-full min-h-full flex flex-row  items-start sm:flex-col mb:flex-col'>
    <div className='bg-secondary  h-[103%] text-base w-[50%] mb:w-full sm:w-full md:w-full '>
       <div className='flex flex-col justify-center items-center h-auto mt-14  space-y-16 '>
          <div className='flex flex-row justify-between items-center w-[70%] mb:w-[90%] md:w-[90%] sm:w-[90%]'>
            <div>
              <h1 className='text-cinzel-68 mb:text-[2.5rem]' style={{fontFamily:'Cinzel'}}>Second <span className='text-cinzel-48 mb:text-[2rem]' style={{fontFamily:'Cinzel'}}>floor</span></h1>
              <p className='text-floorText text-available'>3/4 Shops availabe</p>
            </div>
            <div className='flex flex-row items-start'>
               <p className='text-baseBold '>PKR 56,500 Per/sq. ft.</p>
            </div>
          </div>
          <div className='flex flex-col  items-start  w-[65%] mb:w-[90%] sm:w-[90%] md:w-[90%]  space-y-6 '>
              <div className='flex flex-row items-center justify-between border-b-[1px] border-base w-full pb-2'>
                <h1 className='text-medium'>Shop S1</h1>
                <img src={shop} className="w-[29px] h-[29px]"/>
              </div>
              <div className='text-[#8B6C69] text-area flex flex-row items-center justify-between w-[70%]  relative top-[20%]'>
                763.75 sq. ft
              </div>
          </div>
          <div className='flex flex-row items-center w-[70%] mb:w-[90%] sm:w-[90%] md:w-[90%]  relative top-[20%] space-x-2'>
             <span className='text-totalAmount mb:text-[3em] '>Rs 43,151,875</span>
             <span className='mt-5 text-[#8B6C69]'>Total Value</span>
          </div>
       </div>

    </div>
    <div className='max-h-[25%] max-w-[35%] object-cover ml-[7%] mt-[5%] sm:w-full sm:mx-auto  sm:ml-0 sm:mt-1   mb:ml-0 mb:mt-1 mb:w-full sm:max-h-full mb:max-w-full'>
      <img src={floor} className="mx-auto w-full h-full  object-cover w-[90%]"/>
    </div>
  </section>
  </>)
}

export default FloorBottom