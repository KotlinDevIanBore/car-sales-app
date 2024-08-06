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
        // scrollCarGridIntoView();
        SendSearchRequest();
        event.preventDefault();
        alert('handle click functions')
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
        className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500 "
        onChange={handleChange}
      />
      <button 
        type="submit" 
        className=" h-10 bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1"
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
