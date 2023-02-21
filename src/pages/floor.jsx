import React,{useState} from 'react'
import FloorBottom from '../components/floorBottom'
import FloorLevelLable from '../components/floorLevelLable'
import Header from '../components/header'

const Floor = ({setfloorClicked}) => {
  const [floorData,setfloorData]=useState({
    floor:"Second floor",
    square:56500,
    shop:"S1",
    shopFeet:763.75,
    totalPrice:43151875
  })
  return (<>
    <section className='h-screen w-full flex flex-col '>
        <div className='bg-header max-h-[30%]  space-y-8 pb-8'>
            <Header/>
            <FloorLevelLable floorData={floorData} setfloorData={setfloorData} setfloorClicked={setfloorClicked}/>
        </div>
        <div className='flex flex-row h-full'>
           <FloorBottom floorData={floorData} setfloorData={setfloorData}/>
        </div>
    </section>
  </>
  )
}

export default Floor