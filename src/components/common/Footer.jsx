import app_store from '../../assets/images/app_store.png';
import googlePlay from '../../assets/images/googlePlay.png';
import { IoReturnUpForwardOutline } from "react-icons/io5";
import { IoReturnDownBack } from "react-icons/io5";
import original from '../../assets/images/original.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { usefulLinks, customerServices, onlineShopping, popularSearches } from '../../data/footerData';

export default function Footer() {
    return (
        <div id="footer" className="bg-[#f7f6f2] h-[1000px]">
            <div className="feature flex w-[1100px] justify-around gap-5 mx-auto">
                <div className="first">
                    <div className="onlinleShopping">
                        <h5 className="font-bold text-[11px] py-4">ONLINE SHOPPING</h5>
                        <ul className="flex flex-col text-gray-500 text-sm py-4">
                            {
                                onlineShopping.map((item, id)=>(
                                    <li key={id}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="links py-4">
                        <h5 className="font-bold text-[11px] py-4">USEFUL LINKS</h5>
                        <ul className="flex flex-col text-gray-500 text-sm py-4">
                            {
                                usefulLinks.map((item, id)=>(
                                    <li key={id}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="second">
                    <div className="policies py-4">
                        <h1 className="font-bold text-[11px]">CUSTOMER SERVICES</h1>
                        <ul className="flex flex-col text-sm py-4 text-gray-500">
                            {
                                customerServices.map((item, id) => (
                                    <li key={id}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="third py-4">
                    <h1 className="font-bold text-[11px] whitespace-pre"> EXPERIENCE MYNTRA ON MOBILE</h1>
                    <div className="available flex">
                        <img src={googlePlay} alt='GooglePlay' className='w-40'/>
                        <img src={app_store} alt='App Store' className='w-40'/>
                    </div>
                    <div className="social">
                        <h1 className="font-bold text-[11px]">KEEP IN TOUCH</h1>
                        <div className="flex gap-3  py-3">
                            <FaFacebookSquare fontSize="1.3rem" className='hover:scale-[1.3] transition ease-in duration-900 cursor-pointer' />
                            <FaTwitter fontSize="1.3rem" className='hover:scale-[1.3] transition ease-in duration-900 cursor-pointer' />
                            <FaYoutube fontSize="1.3rem" className='hover:scale-[1.3] transition ease-in duration-900 cursor-pointer' />
                            <FaInstagram fontSize="1.3rem" className='hover:scale-[1.3] transition ease-in duration-900 cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className="fourth flex flex-col gap-3 py-4 ">
                    <div className="original flex justify-between gap-2 items-center">
                        <img className='' width="50px" src={original} alt="Original" />
                        <div className="">
                            <span className="font-bold text-[11px] text-gray-700">100% ORIGINAL</span> gaurantee <br /> for products at
                            myntra.com
                        </div>
                    </div>
                    <div className="text-md flex items-center gap-2">
                        <div className="flex flex-col items-center">
                            <IoReturnUpForwardOutline fontSize="2rem" />
                            <span className='mb-[-1rem] mt-[-1rem]'>14</span>
                            <IoReturnDownBack fontSize="2rem" />
                        </div>
                        <div className="">
                            <span className="font-bold">return within 14 days </span><br /> of receiving your order
                        </div>
                    </div>
                </div>
            </div>
            <div className="popular w-[1000px] mx-auto">
                {/* <!-- <hr style="height:2px;border-width:0;background-color:rgb(132, 125, 125)"> --> */}
                <div className="heading_plus_line flex">
                    <h5 className="font-bold text-[11px] py-4">POPULAR SEARCHES</h5>
                    <hr />
                </div>
                <div className="searches text-sm text-gray-500 leading-7">
                    {
                        popularSearches.map((item, id)=>(
                            <span>{item} {id !== popularSearches.length-1 && '|'} </span>
                        ))
                    }
                </div>
                <div className="copyRight flex justify-between py-9">
                    <div className="contact text-gray-500">In case of any concern, <span className="text-blue-700">Contact
                        Us</span></div>
                    <div className="rights text-gray-500">
                        <i className="fa-regular fa-copyright"></i>2023 www.myntra.com All rights reserved.
                    </div>
                </div>
                <hr className="text-gray-800 py-4" />
            </div>
            <div className="address flex justify-between w-[1100px] mx-auto">
                <div className="one">
                    <h1 className="font-bold text-sm py-4">Registerd Office Address</h1>
                    <ul className="text-sm text-gray-500">
                        <li>Building Alyssa,</li>
                        <li>Begonia and Clover situated in Embassy Tech Village,</li>
                        <li>Outer Ring Road,</li>
                        <li>Devarabeesanahalli Village,</li>
                        <li>Varthur Hobli,</li>
                        <li>Bengaluru – 560103, India</li>
                    </ul>
                </div>
                <div className="two text-sm text-gray-500 flex flex-col justify-end ">
                    <p className="align-end">CIN: U72300KA2007PTC041799</p>
                    <p className="self-end">Telephone:<span className="text-blue-800 font-bold">+91-80-61561999</span></p>
                </div>
            </div>
        </div>
    )
}
