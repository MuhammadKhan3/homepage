import React from 'react'

const DropPane = ({floor}) => {
  return (<div className={`w-full   bg-white h-[30vh] mt-[70vh] z-50   fixed top-0 left-0 hidden  ${floor.length>0 ? ' sm:block mb:block':''}`} >
    <ul className='mt-[2vh] flex flex-col gap-2'>
      <li className='text-primary flex flex-row  text-[20px] justify-between px-4 hover:bg-primary hover:bg-opacity-10'>
        <div className='flex flex-row   justify-between gap-6'>
          <h1>2E</h1>
          <h1>1 Appartment</h1>
        </div>
        <div>
          <span>FROM 23.2 MIllION </span>
        </div>
      </li>
      <li className='text-primary flex flex-row  text-[20px] justify-between px-4'>
        <div className='flex flex-row   justify-between gap-6'>
          <h1>2E</h1>
          <h1>1 Appartment</h1>
        </div>
        <div>
          <span>FROM 23.2 MIllION </span>
        </div>
      </li>
      <li className='text-primary flex flex-row  text-[20px] justify-between px-4'>
        <div className='flex flex-row   justify-between gap-6'>
          <h1>2E</h1>
          <h1>1 Appartment</h1>
        </div>
        <div>
          <span>FROM 23.2 MIllION </span>
        </div>
      </li>
    </ul>
    <button className=' text-[20] flex flex-row justify-center m-auto bg-primary text-white px-3 py-4 mt-1 rounded-full font-medium'>Choose An Appartment</button>
  </div>)
}

export default DropPane