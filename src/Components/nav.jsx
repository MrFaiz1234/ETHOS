import React from "react";
import logo from "../images/ETHOS 1.png"

function Nav() {
    return(
        <div className="nav flex flex-col bg-white sm:flex-row justify-around items-center sticky top-0 z-50 border-b border-gray-200 shadow-sm">
            <div className="h-[80px] w-[250px] flex justify-between items-center ">
                <ul className="w-[100%] h-[100%] font-semibold flex justify-between items-center ">
                    <li className="cursor-pointer">Service </li>
                    <li className="cursor-pointer">Blog </li>
                    <li className="cursor-pointer">Ai Assistant </li>
                </ul>
            </div>
            <a href="/" className="h-[80px] md:w-[250px] w-[150px] flex justify-center items-center ">
                <img className="md:h-full md:w-full w-[150px] object-contain p-6 cursor-pointer"
                
                src={logo} />
            </a>
            <div className="h-[80px] p-0 m-0 md:w-[250px] w-[150px] flex justify-center items-center md:justify-start ">
                <button className=" bg-green-300 px-10 py-1 text-black font-semibold rounded-xl">
                    Login
                </button>
            </div>
        </div>
    )
}
export default Nav