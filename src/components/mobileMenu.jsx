import React from 'react'
import vectorOne from '../images/logo/VectorOne.png';
import vectorTwo from '../images/logo/VectorTwo.png';
import vectorThree from '../images/logo/VectorThree.png';
import vectorFour from '../images/logo/VectorFour.png';
import vectorFive from '../images/logo/VectorFive.png';
import {AiOutlineArrowLeft} from 'react-icons/ai'


const MobileMenu = ({menu,setmenu}) => {
  return (<>
    {menu &&
        <>
  
          <div  className='w-full h-full overflow-auto z-10 backdrop-brightness-50  bg-primary bg-opacity-60 absolute top-0 left-0 '>
            <div className='text-primary z-50 relative top-10 flex flex-row items-center w-full justify-between px-10 mb:px-1 sm:px-2  '>
              <div className='flex flex-row justify-center items-center space-x-5 '>
                  <div className='h-[51.09px] w-[180.9px] rounded-3xl border-[1px] border-primary cursor-pointer flex flex-row   items-center justify-center hover:bg-primary hover:text-white sm:hidden mb:hidden'>
                      Sign In
                  </div>
                  
                  <AiOutlineArrowLeft size={20}   className="mb:block sm:block hidden text-white bg-primary hover:bg-white hover:text-primary p-2 w-fit rounded-full h-fit cursor-pointer" onClick={()=>{setmenu(false)}}/>
                  <div className='text-smallBold hidden  lg:block xl:block 2xl:block'>
                    <span className='text-[#FFFFFF66] '>
                      UAN 
                    </span>
                    &nbsp;
                    <span className='text-white'>(051)-111 789 111</span>
                  </div>
              </div>
              <div  className=' flex flex-row  mb:h-[20%]  mb:w-[4%] md:h-[20%] md:w-[2.8%] sm:h-[20%] sm:w-[2.8%] h-[10%] w-[1.7%] '>
                    <img src={vectorOne}/>
                    <img src={vectorTwo}    className=""/>
                    <img src={vectorThree}  className=""/>
                    <img src={vectorFour}   className=""/>
                    <img src={vectorFive}   className=""/>
              </div>
              <div className='flex flex-row items-center '>
                  <div className='text-smallBold mr-10 hidden lg:block xl:block 2xl:block'>
                    <span className='text-[#FFFFFF66] '>
                      UAN 
                    </span>
                    &nbsp;
                    <span className='text-white'>(051)-111 789 111</span>
                  </div>
                  <div className='h-[51.09px] w-[180.9px] rounded-3xl border-[1px]  cursor-pointer flex flex-row   items-center border-primary justify-center bg-primary text-white sm:hidden mb:hidden'>
                      Sign In
                  </div>
                  <label  htmlFor="my-modal">
                    <div  className='h-[51.09px] w-[120.9px] rounded-3xl border-[1px] text-center text-white  bg-primary cursor-pointer  hover:bg-white hover:text-primary flex-row justify-center items-center hidden sm:flex  mb:flex mr-5'>
                        Appartments
                    </div>
                  </label>
  
              </div>
            </div>   
                    {/* menu list */}
            <div className='text-white relative  mt-16  mx-8 hidden sm:block mb:block '>
               <ul className='text-menuList text-[30px] flex flex-col gap-5'>
                <li  className='hover:text-primary active:text-[#e6af50]'> <a href='#'>ABOUT THE PROJECT</a></li>
                <li  className='hover:text-primary active:text-[#e6af50]'> <a href='#'>Brochure</a></li>
                <li  className='hover:text-primary active:text-[#e6af50]'> <a href='#'>Price Plan</a></li>
                <li  className='hover:text-primary active:text-[#e6af50]'> <a href='#'> Construction Updates</a></li>
  
               </ul>            
            </div>
          </div>
  
  
        </>
        }
        </>)
}

export default MobileMenu