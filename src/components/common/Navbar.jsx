import React from 'react'
import Logo from '../../assets/images/myntra.png';
import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { fashionCategory } from '../../data/category';
import CategoryOptions from './CategoryOptions';
import ProfileOption from './ProfileOption';
import Studio from './Studio';

export default function Navbar() {
    return (
        <nav className="navbar relative shadow-md h-[5rem] flex rounded-sm justify-between px-12 items-center sticky top-0 bg-white z-1">
            <div className="logo-container flex py-4">
                <img className=" w-[60px] h-[50px] rounded-full" src={Logo} alt='Logo' />
            </div>

            <ul className="flex gap-8 my-5 text-sm font-bold  h-[100%]">
                {
                    fashionCategory.map((category, id)=>(
                        <li className={`hover:text-red-500 group  hover:border-b-[0.2rem] hover:border-[${category.color}] h-[100%] flex items-center cursor-pointer text-[13px] font-bold`} key={id}>
                            {category.item.toUpperCase()}{category.item === 'studio' && <sup className="text-red-500">NEW</sup>}
                            {
                                category.item === 'studio' ? <Studio/>:<CategoryOptions category={category}/>
                            }
                        </li>
                    ))
                }
            </ul>

            <div className="relative text-gray-600">
                <div className="absolute top-[10px] left-[40px]">
                    <HiMagnifyingGlass/>
                </div>
                <input className="text-sm bg-gray-200 py-2 px-[90px] w-[500px] rounded-md text-start " type="text"
                    placeholder="Search for products, brands and more" />
            </div>
            <div className="nav-items flex justify-evenly gap-5 text-[11px] font-semibold h-[100%] items-center">
                <div className="profile group flex flex-col items-center cursor-pointer hover:border-b-[0.2rem] hover:border-[#EF7C8E] h-[100%] justify-center">
                    <FaRegUser fontSize="1rem"/> Profile
                    <ProfileOption/>
                </div>
                <div className="wishlist flex flex-col items-center cursor-pointer h-[100%] justify-center">
                    <FaRegHeart fontSize="1rem"/> Wishlist
                </div>
                <div className="bag flex flex-col items-center cursor-pointer h-[100%] justify-center">
                    <HiOutlineShoppingBag fontSize="1rem"/>
                    Bag
                </div>
            </div>

        </nav>
    )
}
