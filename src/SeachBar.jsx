import React from "react";
import PropTypes from "prop-types";

// import { BiSearch } from "react-icons/bs";

const SeachBar = ({ handleSearch }) => {
  const [query, setQuery] = React.useState("");

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
        handleSearch(query)
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-full bg-gray-500 shadow-lg h-12 rounded-full px-4 py-2 flex items-center justify-center">
        <div className="flex w-full h-full">
          {/* <BiSearch /> */}
          <input
            onKeyDown={handleKeyDown}
            value={query}
            onChange={handleQueryChange}
            placeholder="Search for an image"
            className="bg-inherit w-full h-full text-xl outline-0"
          />
        </div>
      </div>
      <button
        onClick={() => handleSearch(query)}
        className="w-40 h-10 bg-blue-800 rounded-full hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
};

SeachBar.propTypes = {};

export default SeachBar;
