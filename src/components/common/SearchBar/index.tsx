import React from "react";
import { useSearchParams } from "react-router-dom";
import { debounce } from "../../../helpers/utils";

const SearchBar: React.FC = () => {
  const [, setSearch] = useSearchParams();

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setSearch({ q: value });
  };

  return (
    <div className="search-bar">
      <div className="relative">
        <input
          type="search"
          className="h-14 w-90 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
          placeholder="Search here..."
          onChange={debounce(searchHandler, 500)}
        />
        <div className="absolute top-4 right-3">
          {" "}
          <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>{" "}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
