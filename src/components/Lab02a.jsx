import React from 'react'
import LogoPink from "/chefify.png"
import Check from "/check.png"
import { IoSearch } from "react-icons/io5";
import Avatar from "/avatar.png"
import { FaBars } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
const type = [
    {
        value: "Pan-fried",
        check: false
    },
    {
        value: "Grilled",
        check: true
    },
    {
        value: "Sauteed",
        check: false
    },
    {
        value: "Steamed",
        check: false
    },
    {
        value: "Stir-fried",
        check: false
    },
    {
        value: "Roasted",
        check: true
    },
    {
        value: "Baked",
        check: false
    },
    {
        value: "Stewed",
        check: false
    },
]
function Lab02a() {
    
  return (
    <section className='min-h-screen w-full'>
        <header className='flex items-center justify-center gap-20'>
            <div className='flex gap-4 items-center'>
                <img src={LogoPink} alt="logo" />
                <div className='relative'>
                    <IoSearch size={24} className='absolute top-1/2 left-2 -translate-y-1/2' ></IoSearch>
                    <input type="text" className=' p-2 px-10 rounded-2xl min-w-[300px] !bg-gray-200' placeholder='Search....' />
                </div>
            </div>
            {/* f84c84 */}
            <ul className='flex gap-2 text-sm text-[#585c6c] '>
                <li>
                    <a href="#">What to cook</a>
                </li>
                <li>
                    <a href="#">Recipes</a>
                </li>
                <li>
                    <a href="#">Recipes</a>
                </li>
                <li>
                    <a href="#">Occasions</a>
                </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
            </ul>
            <div className='flex gap-3'>
                <div className='flex gap-2 items-center bg-[#f84c84]/30 rounded-md p-2'>
                    <img src={Check} alt="HaManhCuong" />
                    <p className='text-[#f84c84]'>Your Recipe Box</p>
                </div>
                <img src={Avatar} alt="HaManhCuong" />
            </div>
        </header>
        <div className='w-[1400px] p-10 mx-auto grid grid-cols-[400px,1fr]'>
            <div className='border-2 flex flex-col gap-8 border-gray-400'>
                <div className='flex gap-2 items-center'> 
                      <FaBars size={24} />
                <h2 className='text-2xl font-black'>FILTERS</h2></div>
                <div>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-xl font-bold'>Type</h3>
                        <FaChevronUp size={20} />
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
            <div></div>
        </div>
    </section>
  )
}

export default Lab02a