import React from "react";
import { GoShareAndroid } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";

function BlogCard({ image, tag, title, description, date, readTime }) {
  return (
    <div className="flex gap-3 md:gap-6 bg-white rounded-l-lg border ">
      
      <img
        src={image}
        alt={title} 
        className="md:w-[300px] md:h-[245px] w-[120px] h-[200px] object-cover rounded-l-lg"
      />

      <div className="flex flex-col justify-between md:p-4 pt-2 pb-2 pr-2 ">
        <div>
          <span className="w-[] inline-block text-xs bg-green-300 text-black px-3 py-1 rounded-full mb-2">
            {tag} 
          </span>

          <h3 className="md:text-2xl text-lg font-semibold leading-tight">
            {title}
          </h3>

          <p className="md:text-sm text-xs text-gray-600 mt-2">
            {description}
          </p>
        </div>

        <div className="text-xs text-gray-400 mt-3 flex justify-between items-center">
          <div>{date} · {readTime}</div>
          <div className="flex gap-[10px]">
            <GoShareAndroid /><FaRegHeart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
