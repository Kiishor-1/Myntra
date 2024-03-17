import React from 'react'
import Logo from '../../assets/images/myntra.png';
import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function Navbar() {
    const category = ['men', 'women', 'kids', 'home & living', 'beauty', 'studio'];
    return (
        <nav class="navbar shadow-md flex rounded-sm justify-between px-12 items-center sticky top-0 relative bg-white z-1">
            <div class="logo-container flex py-4">
                <img class=" w-[60px] h-[50px] rounded-full" src={Logo} alt='Logo' />
            </div>

            <ul class="flex gap-8 my-5 text-sm font-bold">
                {
                    category.map((item, id)=>(
                        <li class="hover:text-red-500 cursor-pointer text-[13px] font-bold" key={id}>{item.toUpperCase()}{item === 'studio' && <sup
                        class="text-red-500">NEW</sup>}</li>
                    ))
                }
            </ul>

            <div class="relative text-gray-600">
                <div className="absolute top-[10px] left-[40px]">
                    <HiMagnifyingGlass/>
                </div>
                <input class="text-sm bg-gray-200 py-2 px-[90px] w-[500px] rounded-md text-start " type="text"
                    placeholder="Search for products, brands and more" />
            </div>
            <div class="nav-items flex justify-evenly gap-5 text-[11px] font-semibold">
                <div class="profile flex flex-col items-center cursor-pointer">
                    <FaRegUser fontSize="1rem"/> Profile
                </div>
                <div class="wishlist flex flex-col items-center cursor-pointer">
                    <FaRegHeart fontSize="1rem"/> Wishlist
                </div>
                <div class="bag flex flex-col items-center cursor-pointer">
                    <HiOutlineShoppingBag fontSize="1rem"/>
                    Bag
                </div>
            </div>

        </nav>
    )
}
