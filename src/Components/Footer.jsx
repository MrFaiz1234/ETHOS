import React from "react";
import logo2 from "../images/ETHOS_logowhite_v1 1 (1).png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiInstagramFill     } from "react-icons/ri";
import { AiFillPinterest } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";

function Footer() {
    return(
        <>
            <div className="w-full h-full flex justify-center  items-center flex-col bg-black pb-10">
                <div className="pt-5 mb-5">
                    <img  src={logo2} className="w-[150px]" />
                </div>
                <div className="h-full w-[90%] md:w-[80%] flex flex-wrap justify-around  text-white gap-[50px] mt-5">
                    <div className="w-[190px] h-full">
                        <h1 className="text-2xl color-white font-bold mb-2">SERVICES</h1>
                        <ul>
                            <li className="flex items-center"><span><MdKeyboardArrowRight /></span> AI Assistant</li>
                            <li className="flex items-center"><span><MdKeyboardArrowRight /></span> Color Analysis</li>
                            <li className="flex items-center"><span><MdKeyboardArrowRight /></span> App</li>
                            <li className="flex items-center"><span><MdKeyboardArrowRight /></span> Body type Calculator</li>

                        </ul>
                    </div>
                    <div className="w-[190px] h-full">
                        <h1 className="text-2xl color-white font-bold mb-2">SUPPORT</h1>
                        <ul>
                            <li className="flex items-center"><span><MdKeyboardArrowRight /></span> FAQ</li>
                            <li className="flex items-center"><span><MdKeyboardArrowRight /></span> Contact Us</li>
                            <li className="flex items-center"><span><MdKeyboardArrowRight /></span> Refund policy</li>
                            <li className="flex items-center"><span><MdKeyboardArrowRight /></span> Privacy Policy</li>
                        </ul>
                    </div>
                     <div className="w-[190px] h-full">
                        <h1 className="text-2xl color-white font-bold mb-2">BLOG</h1>
                        <ul>
                            <li className="flex items-center"><span><MdKeyboardArrowRight /></span> All Things Outfit</li>
                            <li className="flex items-center"><span><MdKeyboardArrowRight /></span> Winter Outfits</li>

                        </ul>
                    </div>
                    <div className="w-[190px] h-full  ">
                        <h1 className="text-2xl color-white font-bold mb-2">FOLLOW US</h1>
                        <ul className="flex gap-[10px]">
                            <RiInstagramFill className="text-2xl" />
                            <AiFillPinterest className="text-2xl"/>
                            <AiFillTikTok className="text-2xl"/>
                        </ul>
                    </div>
                </div>
            </div>  
        </>
    )
}
export default Footer