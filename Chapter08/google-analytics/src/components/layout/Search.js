import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { Index } from "elasticlunr";

const Search = ({ searchIndex }) => {
  const [query, setQuery] = useState("");
  let [index, setIndex] = useState();
  let [results, setResults] = useState([]);

  useEffect(() => {
    setIndex(Index.load(searchIndex));
  }, [searchIndex]);

  const searchResultSize = 3;
  const search = (evt) => {
    const query = evt.target.value;
    setQuery(query);
    setResults(
      index
        .search(query, { expand: query.length > 2 })
        .map(({ ref }) => index.documentStore.getDoc(ref))
    );
  };
  return (
    <div className="relative w-64 text-gray-600">
      <input
        className="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-8 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
        type="search"
        name="search"
        placeholder="Search"
        autoComplete="off"
        aria-label="Search"
        onChange={search}
        value={query}
      />
      <div className="absolute right-0 top-0 mt-3 mr-4">
        <svg
          className="text-gray-600 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      {results.length > 0 && (
        <div className="flex flex-col border-4 border-blue-500 absolute z-30 top-0 flex w-64 left-0 mt-12 bg-white rounded">
          {results
            .slice(0, searchResultSize)
            .map(({ title, description, path }) => (
              <Link
                key={path}
                to={path}
                className="hover:bg-blue-100 w-full p-1 border-b border-gray-200"
              >
                <p>{title}</p>
                <p className="text-xs">{description}</p>
              </Link>
            ))}
          {results.length > searchResultSize && (
            <Link
              to={`/search?q=${query}`}
              className="hover:bg-blue-100 w-full p-1"
            >
              <p className="text-xs">
                + {results.length - searchResultSize} more
              </p>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Search