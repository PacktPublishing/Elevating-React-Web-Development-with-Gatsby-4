import React from "react";
import { Link } from "gatsby";
const Pagination = ({ numPages, currentPage }) => {
  var pageArray = [];
  for (var i = 1; i <= numPages; i++) pageArray[i] = i;
  return (
    <div className="mx-auto ">
      <ul className="mx-auto flex pl-0 list-none rounded my-2">
        {currentPage !== 1 && (
          <li className="relative flex py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200">
            <Link className="w-full" to={currentPage === 2 ? `/blog`: `/blog/${currentPage-1}`}>
              Previous
            </Link>
          </li>
        )}
        {pageArray.map((pageNum) => (
          <li key={`pageNum_${pageNum}`} className={`relative flex py-2 px-3 leading-tight bg-white border border-gray-300 ${currentPage===pageNum ? "bg-blue-50 text-blue-900": "text-blue-700"} ${currentPage === 1 && pageNum===currentPage ? "rounded-l" :""} ${pageNum === numPages && currentPage === numPages  ? "rounded-r" :"border-r-0"} hover:bg-gray-200`}>
            <Link className="w-full" to={pageNum === 1 ? `/blog`: `/blog/${pageNum}`}>
              {pageNum}
            </Link>
          </li>
        ))}
        {currentPage !== numPages && (
          <li className="relative flex py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 rounded-r hover:bg-gray-200">
            <Link className="w-full" to={`/blog/${currentPage+1}`}>
              Next
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination