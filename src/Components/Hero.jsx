import React from "react";
import hero from "../images/image.png"

function Hero (){
    return(
        <>
            <div className="h-[90vh] w-full flex items-center justify-center bg-cover bg-no-repeat  text-white"
                 style={{ backgroundImage: `url(${hero})` }}>
                <div className="text-center mt-12">
                    <p className="mb-3">My Outfit with Ethos</p>
                    <h1 className="relative text-4xl md:text-6xl font-bold text-center leading-tight">
                        Red Dresses | Discover The <br/> Perfect Fit And Fabric For <br/> Your Next Occasion
                    </h1>
                    <button className="mt-10 font-semiblod bg-white text-black px-6 py-1 rounded-xl">
                        Read More
                    </button>
                </div>
            </div>
        </>
    )
}
export default Hero