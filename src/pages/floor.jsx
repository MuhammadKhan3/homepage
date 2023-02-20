import React from 'react'
import FloorBottom from '../components/floorBottom'
import FloorLevelLable from '../components/floorLevelLable'
import Header from '../components/header'

const Floor = ({setfloorClicked}) => {
  return (<>
    <section className='h-screen w-full flex flex-col '>
        <div className='bg-header max-h-[30%]  space-y-8 pb-8'>
            <Header/>
            <FloorLevelLable setfloorClicked={setfloorClicked}/>
        </div>
        <div className='flex flex-row h-full'>
           <FloorBottom/>
        </div>
    </section>
  </>
  )
}

export default Floor