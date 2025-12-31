import React from "react";
import iphone from "../images/Image Container.png"

function ComingSoon() {
    return(
        <>
            <div className="w-full lg:h-[70vh] h-full flex justify-around items-center flex-wrap bg-[#E9E8E0] lg:overflow-hidden">
                <div className="w-[400px] md:mb-20 pt-10 lg:pt-0">
                    <button className=" font-semiblod  text-black px-6 py-1 rounded-3xl bg-green-300">
                        Coming Soon
                    </button>
                    <h1 className="text-5xl color-gray-500 font-bold pt-2 pb-5">
                        Tired of Guessing
                        <br/>What To Wear
                    </h1>
                    <p className="text-gray-500 mt-2 mb-2">
                        Swipe outfit ideas like Tinder, explore more closet <br/> filters, build your own looks and ask Ethe for help if <br/> needed. Get the styling experience on our app
                    </p>
                    <button className="mt-3 font-bold text-2xl text-white  px-10 py-2 rounded-lg bg-green-300">
                       Sign Up
                    </button>
                </div>  
                <img className="w-[430px] h-[full]" src={iphone}/>
                
            </div>
        </>
    )
}
export default ComingSoon