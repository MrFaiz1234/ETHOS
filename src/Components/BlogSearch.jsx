import { useState } from "react";
import { blogData } from "../Data/blogData";
import { FaSearch } from "react-icons/fa";
import CategoryFilter from "./CategoryFilter";


function BlogSearch() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs = blogData.filter((blog) =>
    `${blog.title} ${blog.tag} ${blog.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center flex-col items-center">

      {/* Search Bar */}
      <div className="relative w-full sm:w-[80%] md:w-[70%] lg:w-[90%]">
        <input
          type="text"
          placeholder="Search here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl bg-[#EFF4FF] py-5 pl-4 pr-16 text-sm focus:outline-none focus:ring-1 focus:ring-black"
        />

        {/* Divider + Icon */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-4 pointer-events-none">
          <span className="h-8 w-px bg-blue-600"></span>
          <FaSearch className="text-3xl text-black " />
        </div>
      </div>

      {/* Results – only show when typing */}
      {search.length > 0 && (
        <div className="mt-6 bg-white rounded-2xl shadow-md p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden border hover:shadow-md transition"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-40 object-cover"
                  />

                  <div className="p-4">
                    <span className="text-xs font-medium text-gray-500">
                      {blog.tag}
                    </span>

                    <h3 className="text-sm font-semibold mt-1 mb-2">
                      {blog.title}
                    </h3>

                    <p className="text-xs text-gray-600 line-clamp-3 mb-3">
                      {blog.description}
                    </p>

                    <div className="flex justify-between text-xs text-gray-400">
                      <span>{blog.date}</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No results found
              </p>
            )}
          </div>
        </div>
      )}
       <CategoryFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </div>
  );
}

export default BlogSearch;
