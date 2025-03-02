import React from 'react'
import LogoPink from "/chefify.png"
import Check from "/check.png"
import { IoSearch } from "react-icons/io5";
import Avatar from "/avatar.png"
import { FaBars } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import CheckBox from "/checkbox.png";
import CheckBoxChecked from "/checkboxpink.png";
import Filter from "/list_filter.png";
import LogoWhite from "/chefifywhite.png";
import Nothing from "/nothing.png";
import rating1 from "/rating_1.png";
import rating2 from "/rating_2.png";
import rating3 from "/rating_3.png";
import rating4 from "/rating_4.png";
import rating5 from "/rating_5.png";
import SliderImg from "/slider.png";
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
const rating = [
    {
        check: false,
        img: rating5
    },
    {
        check: false,
        img: rating4
    },
    {
        check: false,
        img: rating3
    },
    {
        check: true,
        img: rating2
    },
    {
        check: true,
        img: rating1
    },

]

function Lab02a() {
    
  return (
    <section className='w-full min-h-screen'>
        <header className='flex items-center justify-center gap-20'>
            <div className='flex items-center gap-4'>
                <img src={LogoPink} alt="logo" />
                <div className='relative'>
                    <IoSearch size={24} className='absolute -translate-y-1/2 top-1/2 left-2' ></IoSearch>
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
        <div className='w-[1400px] p-10 ml-auto mr-auto grid grid-cols-[350px_auto]'>
            <div className='flex flex-col gap-4 border-gray-200 rounded-md shadow border-1'>
                <div className='flex items-center gap-2 p-4'> 
                      <FaBars size={24} />
                <h2 className='text-2xl font-black'>FILTERS</h2></div>
                <div className='p-4'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-xl font-bold'>Type</h3>
                        <FaChevronUp size={20} color='#f84c84'/>
                    </div>
                    <div className='grid grid-cols-2 gap-3 mt-4'>
                        {type.map((item,index)=>{
                            return(
                                <div className='flex items-center gap-2'>
                                    {item.check ? <img src={CheckBoxChecked} alt="checkbox" /> : <img src={CheckBox} alt="checkbox" />}
                                    <span>{item.value}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='w-full h-0.5 bg-gray-200 '></div>
                <div className='p-4'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-xl font-bold'>Time</h3>
                        <FaChevronUp size={20} color='#f84c84'/>
                    </div>
                    <div className='relative mt-4'>
                        <p className='absolute text-sm text-gray-400 -top-5 left-[35%] -translate-x-1/2'>30 minutes</p>
                        <p className='absolute text-sm text-gray-400 -top-5 left-[70%] -translate-x-1/2'>50 minutes</p>
                        <img src={SliderImg} alt="" className='object-cover w-full' />
                    </div>
                </div>
                <div className='w-full h-0.5 bg-gray-200 '></div>
                <div className='p-4'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-xl font-bold'>Rating</h3>
                        <FaChevronUp size={20} color='#f84c84'/>
                    </div>
                    <div className='flex flex-col gap-4 mt-6'>
                        {rating.map((item,index)=>{
                            return(
                                <div className='flex items-center gap-3'>
                                    {item.check ? <img src={CheckBoxChecked} alt="checkbox" /> : <img src={CheckBox} alt="checkbox" />}
                                    <img src={item.img} alt="rating" />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='w-full h-0.5 bg-gray-200 '></div>
                <div className='p-4'>
                    <button className='bg-[#f84c84] text-lg font-bold w-full text-white p-2 rounded-lg'>Apply</button>
                </div>
            </div>
            <div className='flex flex-col items-center gap-4 p-10'>
                        <p className='text-3xl font-black'>Sorry, no results were found for “cakescascsa”</p>
                        <img src={Nothing} alt="" />
                        <p className='text-xl text-neutral-900'>We have all your Independence Day sweets covered.</p>
                        <div className='flex gap-4'>
                            <p className='text-[#F44B87FF] bg-[#F44B87FF]/20 p-2 rounded-3xl text-sm'>Sweet Cake</p>
                            <p className='text-[#854EF4FF] bg-[#854EF4FF]/20 p-2 rounded-3xl text-sm'>Black Cake</p>
                            <p className='text-[#F44B87FF] bg-[#F44B87FF]/20 p-2 rounded-3xl text-sm'>Pozole Verde</p>
                            <p className='text-[#006B85FF] bg-[#006B85FF]/20 p-2 rounded-3xl text-sm'> Healthy food</p>
                        </div>
            </div>
        </div>
        <div className='w-full font-semibold text-neutral-200 bg-neutral-800'>
            <div className='grid grid-cols-2 gap-28 container w-[1400px] mx-auto min-h-[350px]'>
                <div className='flex flex-col p-10 mx-auto'>
                   <div className='flex flex-col gap-4'>
                   <h3 className='text-xl font-black'>About Us</h3>
                    <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
                    <div className='flex gap-2'>
                        <input type="text" placeholder='Enter your email' className='flex-1 p-2 bg-white rounded text-neutral-500 outline-0'/>
                        <button className='bg-[#f84c84] text-md font-bold text-white p-2 rounded-lg'>Send</button>
                    </div>
                   </div>
                   <div className='flex items-center justify-between mt-auto'>
                    <img src={LogoWhite} alt="" />
                    <p className='text-sm'>2023 Chefify Company</p>
                    <p className='text-sm'>Terms of Service| Privacy Policy</p>
                   </div>
                </div>
                <div className='grid justify-end grid-cols-2 gap-8 p-10 '>
                        <div className='flex flex-col justify-between text-sm'>
                            <div className='flex flex-col gap-4'>
                                <p className='font-black'>Learn More</p>
                                <p>Our Cooks</p>
                                <p>See Our Features</p>
                                <p>FAQ</p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <p className='font-black'>Shop</p>
                                <p>Gift Subscription</p>
                                <p>Send Us Feedback</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 text-sm'>
                        <p className='font-black'>Recipes</p>
                                <p>What to Cook This Week</p>
                                <p>Pasta</p>
                                <p>Dinner</p>
                                <p>Healthy</p>
                                <p>Vegetarian</p>
                                <p>Vegan</p>
                                <p>Christmas</p>
                        </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Lab02a