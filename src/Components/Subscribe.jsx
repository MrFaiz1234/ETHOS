import React from "react";

function Subscribe() {
    return(
        <>
            <div className="w-full h-full text-center bg-white display flex items-center justify-center flex-col pb-10">
                <h1 className="text-4xl font-bold mt-12">Subscribe</h1>
                <p className="mt-4 text-gray-500">Subscribe to get exclusive updates on the AI Outfit Stylist, <br/>
                the outfit generator app, and the latest fashion news.</p>
                <div className="md:w-[700px] w-[300px] flex justify-center mt-10    ">
                    <input placeholder="Enter Your Email" className="md:py-4 md:px-2 w-[190px] px-2 py-2 md:w-[550px] bg-gray-200 border rounded-lg"/>
                    <button className="md:py-4 md:px-6 px-2 py-2 rounded-lg bg-blue-950 text-white">Subscribe →</button>
                </div>
            </div>
        </>
    )
}

export default Subscribe