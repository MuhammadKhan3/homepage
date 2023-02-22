import React from 'react'
import vectorOne from '../images/logo/VectorOne.png';
import vectorTwo from '../images/logo/VectorTwo.png';
import vectorThree from '../images/logo/VectorThree.png';
import vectorFour from '../images/logo/VectorFour.png';
import vectorFive from '../images/logo/VectorFive.png';
import Second from '../images/2nd.png'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import {BsEyeFill} from 'react-icons/bs'
import {AiOutlineArrowLeft} from 'react-icons/ai'



const Header = ({setfloorClicked}) => {
    const navigate=useNavigate();
  return (<>
  {/* sm:justify-start mb:justify-start */}
            <div className='text-primary      flex flex-row   justify-around mb:justify-between mt-1 px-2 items-center'>
                <div className='flex flex-row justify-center items-center '>
                    <div className='h-[51.09px] w-[180.9px] rounded-3xl border-[1px] border-floorText text-floorText cursor-pointer flex flex-row   items-center justify-center hover:bg-primary hover:text-white sm:hidden mb:hidden'>
                        Sign In
                    </div>
                    <div className='mb:flex sm:flex hidden flex-row gap-2'>
                        <AiOutlineMenu size={22}  className="text-white bg-floorText hover:bg-base hover:outline-offset-[1px]] hover:outline-white  p-2 w-fit rounded-full h-fit cursor-pointer"/>
                        <AiOutlineArrowLeft size={22} onClick={()=>{setfloorClicked("")}}  className=" hover:bg-base text-white bg-floorText  p-2 w-fit rounded-full h-fit cursor-pointer"/>
                    </div>
                    <div className='text-smallBold hidden ml-4  lg:block xl:block 2xl:block'>
                        <span className='text-[#FFFFFF66] '>
                            UAN 
                        </span>
                        &nbsp;
                        <span className='text-white'>(051)-111 789 111</span>
                    </div>
                </div>
                <div  className=' flex flex-row  h-[10%]  text-[3rem] text-white hover:text-primary cursor-pointer '>
                    BAKSH
                </div>
                <div className='flex flex-row items-center '>
                    <div className='text-smallBold mr-10 hidden  xl:block 2xl:block'>
                        <span className='text-[#FFFFFF66] '>
                            UAN 
                        </span>
                        &nbsp;
                        <span className='text-white'>(051)-111 789 111</span>
                    </div>
                    <div className='h-[51.09px] w-[180.9px] rounded-3xl border-[1px]  cursor-pointer flex flex-row   items-center border-none justify-center bg-floorText text-white sm:hidden mb:hidden'>
                        Sign In
                    </div>
                    {/* <label className='h-[51.09px] w-fit rounded-3xl border-[1px] text-center text-white  border-floorText cursor-pointer  hover:bg-floorText hover:text-white hidden sm:flex mb:flex  flex-row justify-center items-center   px-4'  htmlFor="my-modal">
                            Appartments
                    </label> */}
                    <div>
                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal  rounded-none">
                            <div className="modal-box h-[23%] w-[95%] rounded-none p-0 absolute top-28 divide-x flex flex-row bg-[#F6F2EC]">
                                <div className=' w-full h-full      cursor-pointer flex flex-col justify-between items-start  hover:bg-white p-3 group' onClick={()=>{navigate("/floor")}}>
                                    Virtual Selection of appartments
                                    <BsEyeFill size={25} />
                                </div>
                                <div className='w-full h-full      cursor-pointer flex flex-col justify-between items-start  hover:bg-white p-3 group'>
                                    Selection by parameters
                                    <BsSearch size={25} className="" />
                                </div>
                            </div>
                        </div>
                   </div>
               </div>
            </div>
            
            
  </>)
}

export default Header