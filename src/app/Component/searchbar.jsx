import React from "react";

const Search = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex justify-end items-center mt-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
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
