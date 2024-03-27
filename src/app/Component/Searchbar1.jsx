import React, { useState, useEffect } from "react";

const Search = ({ searchQuery, setSearchQuery }) => {
  const [inputValue, setInputValue] = useState(searchQuery);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 250);

    return () => clearTimeout(delayDebounceFn);
  }, [inputValue, setSearchQuery]);

  const handleSearchChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex justify-end items-center mt-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={handleSearchChange}
          className="px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
        />
        <div className="absolute top-0 left-0 flex items-center h-full ml-3 text-gray-500">
          {/* Applying Tailwind classes for height and width */}
        </div>
      </div>
    </div>
  );
};

export default Search;
