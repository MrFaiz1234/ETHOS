import React from "react";
import image1 from "../images/img1.png";
import image2 from "../images/img2.png";
import image3 from "../images/img3.png";

function Style() {
    return(
        <>
            <div className="w-full h-full flex flex-col justify-center items-center ">
                <h1 className="pt-6 font-bold text-4xl">
                    Styled by Ethe
                </h1>
                <p className=" pt-2 font-medium text-gray-500">
                    See Ethe in action. Real outfits for real life
                </p>
                <div className="w-full lg:h-[50vh] h-full flex-wrap mt-8 flex justify-around items-center mt-5 mb-10">
                   <img className="h-[100%] w-[300px]  mt-2 mb-2" src={image1} /> 
                   <img className="h-[100%] w-[300px] mt-2 mb-2" src={image2} /> 
                   <img className="h-[100%] w-[300px] " src={image3} /> 
                   
                </div>
            </div>
        </>
    )
}
export default Style