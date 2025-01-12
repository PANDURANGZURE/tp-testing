// import React from 'react'
import React, { useState } from 'react';


import logo from './icon/logo.png'
import grass from './icon/grass.png'

export default function Dashboard() {
    let Name = 3112 ;
    let NetProfit = 322 ;
    let Exeniture = 10020 ;
    let CumulativeEggs = 18125 ;
    let Trays = 18125 ;
    let EggProduction = 80 ;
    let TotalFeedIntake = 1260 ;
    let CostPerEgg = 23;
    let GramsPerEgg = 50;
    
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);


  const handleDivClick = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleClose = () => {
    setIsPopoverOpen(false);
  };

//   2nd
const handleDivvClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClosee = () => {
    setIsOpen(false);
  };

//   3rd
const handleDivvClick1 = () => {
    setIsOpen1(!isOpen1);
  };

  const handleClosee1 = () => {
    setIsOpen1(false);
  };

  //4th
  const handleDivvClick2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleClosee2 = () => {
    setIsOpen2(false);
  };

  //5th
  const handleDivvClick3 = () => {
    setIsOpen3(!isOpen3);
  };

  const handleClosee3 = () => {
    setIsOpen3(false);
  };




return (

    
    <>
    
    
    {/* main div */}
    <div className='md:mt-0 w-full md:ml-[60px] '>
        {/* sub divs */}
        {/* 1st row */} 
        
 


    <div className='m-4 grid grid-cols-2 md:grid-col-2 gap-4 sm:grid-cols-12 md:ml-36   '>
        <div className='min-h-[100px] sm:col-span-2   rounded-2xl backdrop-blur-2xl   shadow-2xl hidden md:block  '> <img className='h-40' src={logo} alt="" /> </div>
        <div onClick={handleDivClick} className='min-h-[100px] sm:col-span-6   rounded-2xl backdrop-blur-2xl  shadow-2xl cursor-pointer    '>
            <div className='p-2' >
            <p className='md:text-2xl text-sm pt-2 font-bold italic'>Statistics Overview (Current Year)</p>
            </div>
            <div className='flex justify-center text-sm font-semibold gap-4 md:gap-20 md:text-xl'>
                <p className='pt-4 '>Net Profit</p>
                <p className='pt-4 '>Exeniture</p>
            </div>
            <div className='flex justify-center  gap-3 font-sans md:gap-28 text-lg'>
                <p className='pt-1 pb-2 '>Rs.{NetProfit}</p>
                <p className='pt-1 pb-2 md:ml-0 ml-4'>Rs.{Exeniture}</p>
                
            </div>
            </div>



{/* popover */}
<div className={`absolute md:h-[600px] md:w-[1100px] h-[800px] w-[350px] backdrop-blur-lg shadow-2xl rounded-2xl p-4 ${isPopoverOpen ? 'block' : 'hidden'} z-50  `}>
<button onClick={handleClose} className="absolute top-2 right-2 ">
    X
  </button>
  <div className=' w-full z-50 mt-10 '>
    <p className='text-black font-bold'>
     laborum nemo incidunt excepturi modi ipsam voluptates aut voluptatem illo cupiditate. Labore recusandae facilis veritatis consectetur expedita. Ab veniam dolorum iure placeat rem, dolor fugiat eos laudantium tempora fugit.
    </p>
  </div>
</div>


{/* popover 2 */}
<div className={`absolute md:h-[600px] md:w-[1100px] h-[800px] w-[350px] backdrop-blur-lg shadow-2xl rounded-2xl p-4 ${isOpen ? 'block' : 'hidden'} z-50  `}>
            <button onClick={handleClosee} className="absolute top-2 right-2 ">
    X
  </button>
  <div className=' w-full z-50 mt-10   '>
    <p className='text-black font-bold'>
     saurav zure laborum nemo incidunt excepturi modi ipsam voluptates aut voluptatem illo cupiditate. Labore recusandae facilis veritatis consectetur expedita. Ab veniam dolorum iure placeat rem, dolor fugiat eos laudantium tempora fugit.
    </p>
  </div>
</div>


{/* popover 3 */}
<div className={`absolute md:h-[600px] md:w-[1100px] h-[800px] w-[350px] backdrop-blur-lg shadow-2xl rounded-2xl p-4 ${isOpen1 ? 'block' : 'hidden'} z-50  `}>
            <button onClick={handleClosee1} className="absolute top-2 right-2 ">
    X
  </button>
  <div className=' w-full z-50 mt-10   '>
    <p className='text-black font-bold'>
     saurav zure  nemo incidunt excepturi modi ipsam voluptates aut voluptatem illo cupiditate. Labore recusandae facilis veritatis consectetur expedita. Ab veniam dolorum iure placeat rem, dolor fugiat eos laudantium tempora fugit.
    </p>
  </div>
</div>


{/* popover 4 */}
<div className={`absolute md:h-[600px] md:w-[1100px] h-[800px] w-[350px] backdrop-blur-lg shadow-2xl rounded-2xl p-4 ${isOpen2 ? 'block' : 'hidden'} z-50  `}>
            <button onClick={handleClosee2} className="absolute top-2 right-2 ">
    X
  </button>
  <div className=' w-full z-50 mt-10  '>
    <p className='text-black font-bold'>
     s laborum nemo incidunt excepturi modi ipsam voluptates aut voluptatem illo cupiditate. Labore recusandae facilis veritatis consectetur expedita. Ab veniam dolorum iure placeat rem, dolor fugiat eos laudantium tempora fugit.
    </p>
  </div>
</div>

{/* popover 4 */}
<div className={`absolute md:h-[600px] md:w-[1100px] h-[800px] w-[350px] backdrop-blur-lg shadow-2xl rounded-2xl p-4 ${isOpen3 ? 'block' : 'hidden'} z-50  `}>
            <button onClick={handleClosee3} className="absolute top-2 right-2 ">
    X
  </button>
  <div className=' w-full z-50 mt-10  '>
    <p className='text-black font-bold'>
     s laborum nemo incidunt excepturi modi ipsam voluptates aut voluptatem illo cupiditate. Labore recusandae facilis veritatis consectetur expedita. Ab veniam dolorum iure placeat rem, dolor fugiat eos laudantium tempora fugit.
    </p>
  </div>
</div>


        <div onClick={handleDivvClick3} className='min-h-[100px] sm:col-span-4   rounded-2xl backdrop-blur-2xl  shadow-2xl '>
        <div>
            <p className='text-2xl pt-2 font-bold italic'>Weather info</p>
            </div>
        </div>
    </div>
    {/* 2nd row */}
    <div className='m-4 grid grid-cols-1 gap-4 sm:grid-cols-12  md:ml-36 '>
        <div className='min-h-[100px] w-auto rounded-2xl shadow-2xl   backdrop-blur-2xl sm:col-span-6 '>
        <div>
            <p className='md:text-sm pt-2 font-bold italic flex ml-3'>Farm Weekly Record</p>
            </div>
        </div>
        <div className='min-h-[100px] w-auto rounded-2xl shadow-2xl   backdrop-blur-2xl sm:col-span-6'>
        <div>
            <p className='md:text-sm pt-2 font-bold italic flex ml-3'>Seed Information</p>
            </div>
        </div>
        
    </div>
    {/* 3rd row */}
    <div className='m-4 grid grid-cols-3 gap-4 sm:grid-cols-12 md:ml-36'>
        <div onClick={handleDivvClick} className='min-h-[150px] w-auto rounded-2xl  shadow-2xl  backdrop-blur-2xl p-4 pt-4 sm:col-span-4 '>
        <div className='md:flex '>
            <div className=''>
            <p className='md:text-2xl font-bold italic flex  '>Egg Production</p>
            <p className='flex md:mx-10 mx-4 my-4 font-bold text-3xl '>{EggProduction}%</p>
            </div>

            <div className='md:ml-10  gap-6'>
            <div className=''>
            <p className='md:text-sm pt-  italic flex '>Cumulative Eggs</p>
            <p className='flex mx-2 my-2  text-2xl'>{CumulativeEggs}</p>
            </div>

            <div className='text-center '>
            <p className='md:text-sm pt-  italic flex '>Egg Production</p>
            <p className='flex mx-6 my-2  text-2xl    '>{EggProduction}</p>
            </div>
            </div>
            
            </div>
        </div>
    
        <div onClick={handleDivvClick1} className='min-h-[150px] w-auto rounded-2xl  shadow-2xl  backdrop-blur-2xl p-4 pt-4 sm:col-span-4 '>
        <p className='text-2xl pt-2 font-bold italic'>Milk Production</p>
        </div>
        <div className='min-h-[150px] w-auto rounded-2xl shadow-2xl  backdrop-blur-2xl p-4 pt-4 sm:col-span-4 '>
        <div className='md:flex'>
            <div onClick={handleDivvClick2} className=''>
            <p className='md:text-xl font-bold italic flex '>Total Feed Intake</p>
            <p className='flex md:mx-6 my-4 font-bold text-3xl'>{TotalFeedIntake} Kg</p>
            </div>

            <div className='md:ml-10  gap-6'>
            <div className=''>
            <p className='md:text-sm pt-  italic flex '>Cost Per Egg</p>
            <p className='flex mx-4 my-2  '>RS. {CostPerEgg}</p>
            </div>

            <div className='text-center '>
            <p className='md:text-sm pt-  italic flex '>Grams Per Egg</p>
            <p className='flex mx-6 my-2  '>{GramsPerEgg} g</p>
            </div>
            </div>
            
            </div>
        </div>
    </div>

    

    {/* 4th row */}
    <div className='m-4 grid grid-cols-2 gap-4 sm:grid-cols-2 md:ml-36'>
        <div className='min-h-[100px] w-auto rounded-2xl  shadow-2xl  backdrop-blur-3xl'>
        <p className='md:text-sm pt-2 font-bold italic flex ml-3'>Latest News</p>
        </div>
        <div className='min-h-[100px] w-auto rounded-2xl  shadow-2xl  backdrop-blur-3xl '>
        <p className='md:text-sm pt-2 font-bold italic flex ml-3'>Inventory</p>
        </div>
        
    </div>


    </div>

    
    
    </>
  )
}
