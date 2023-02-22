import React,{useState} from 'react'
import FloorBottom from '../components/floorBottom'
import FloorLevelLable from '../components/floorLevelLable'
import Header from '../components/header'

const Floor = ({setfloorClicked}) => {
  const [floorData,setfloorData]=useState({
    floor:"Second",
    square:56500,
    shop:"S1",
    shopFeet:763.75,
    totalPrice:43151875
  })
  
  const SecondfloorHandler=()=>{
    setfloorData({})  
    const time=setTimeout(() => {      
      setfloorData({
        floor:"Second",
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
        floor:"One",
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
        floor:"M",
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
        floor:"Ground",
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
        floor:"Lg",
        square:356500,
        shop:"S3",
        shopFeet:1863.75,
        totalPrice:63151875
      })
      clearTimeout(time)
    }, 500);
  }

  return (<>
    <section className='h-screen w-full flex flex-col '>
        <div className='bg-header max-h-[30%] h-fit   space-y-4 pb-8'>
            <Header setfloorClicked={setfloorClicked}/>
            <FloorLevelLable MfloorHandler={MfloorHandler} SecondfloorHandler={SecondfloorHandler} OnefloorHandler={OnefloorHandler} LgfloorHandler={LgfloorHandler} GfloorHandler={GfloorHandler} floorData={floorData} setfloorData={setfloorData} setfloorClicked={setfloorClicked}/>
        </div>
        <div className='flex flex-row h-full w-full max-h-[100%] '>
           <FloorBottom floorData={floorData} setfloorData={setfloorData} MfloorHandler={MfloorHandler} SecondfloorHandler={SecondfloorHandler} OnefloorHandler={OnefloorHandler} LgfloorHandler={LgfloorHandler} GfloorHandler={GfloorHandler}/>
        </div>
    </section>
  </>
  )
}

export default Floor