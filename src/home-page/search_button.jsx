import React from "react";
import { useContext } from "react";
import { searchContext } from "./home_page_context";


const SearchIcon = () =>  {
    const {
        text,
        setText,
        SendSearchRequest,
      } = useContext(searchContext);

      function handleClick(event) {
        SendSearchRequest();
        event.preventDefault();
      }

      function handleChange(e) {
        const searchInput = e.target.value;
        setText(searchInput);
        console.log(text);
      }

    return <>
    <form className="flex flex-col md:flex-row gap-3">
    <div className="flex">
  <input 
    type="text" 
    placeholder="Search for your dream car here"
    className="w-full md:w-80 px-3 h-4 md:h-10 sm:h-5 xs:h-6 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-base md:text-base sm:text-sm xs:text-xs"
    onChange={handleChange}
  />
  <button 
    type="submit" 
    className="h-4  md:h-10 sm:h-5 xs:h-6 bg-sky-500 text-white rounded-r px-2 md:px-3 sm:px-2 xs:px-1 py-0 md:py-1 sm:py-0 xs:py-0"
    onClick={handleClick}
  >
    Search
  </button>
</div>
    <select 
      id="pricingType" 
      name="pricingType"
      className="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
      defaultValue="All"
    >
      <option value="All">All</option>
      <option value="Freemium">Freemium</option>
      <option value="Free">Free</option>
      <option value="Paid">Paid</option>
    </select>
  </form>
    </>
};

export default SearchIcon;
