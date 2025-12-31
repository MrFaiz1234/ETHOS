import { useState } from "react";
import BlogCard from "../Components/BlogCard";
import Pagination from "../Components/Pagination";
import { blogData } from "../Data/blogData";


function BlogSection() {
    const ITEMS_PER_PAGE = 5;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(blogData.length / ITEMS_PER_PAGE);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const visibleData = blogData.slice(start, start + ITEMS_PER_PAGE);

  return (
    <>
      <div className="flex gap-8 mt-10 flex justify-center flex-wrap">

        <div className="lg:w-[260px] sm:w-[200px]  lg:block">
  <div className="bg-white rounded-xl p-6 border">

    <input
      type="text"
      placeholder="Search"
      className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none"
    />

    <div className="mt-6">
      <h4 className="font-semibold mb-3">Occasion</h4>
      <div className="space-y-2 text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Casual
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Work
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Brunch
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Vacation
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Date Night
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Wedding
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Seasonal
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Festive
        </label>
      </div>
    </div>

    <div className="mt-6">
      <h4 className="font-semibold mb-2">Color Analysis</h4>
    </div>

    <div className="mt-4">
      <h4 className="font-semibold mb-2">Apple & Shopping</h4>
    </div>

    <div className="mt-4">
      <h4 className="font-semibold mb-2">Style Tips</h4>
    </div>

  </div>
</div>
        <div className="flex flex-col gap-3 sm:gap-6 md:w-[700px] w-[350px] ">
          {visibleData.map((item, index) => (
            <BlogCard key={index} {...item} />
          ))}
        </div>

      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </>
  );
}

export default BlogSection;
