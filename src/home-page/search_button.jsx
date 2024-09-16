import React from "react";
import { useContext } from "react";
import { searchContext } from "./home_page_context";
import { carGridContext } from "../car-grid-component/car-grid-context";


const SearchIcon = () =>  {

  const {toggleCarGrid}=useContext (carGridContext)
    const {
        text,
        setText,
        fetchSearchData,
        scrollCarGridIntoView
      } = useContext(searchContext);

      function handleClick(event) {
        event.preventDefault();
        toggleCarGrid(true);
        fetchSearchData();
        scrollCarGridIntoView();
        
        alert('happened')
        
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
    className="w-full md:w-80 px-3 h-4 md:h-10 sm:h-5 xs:h-6 rounded-l border-2 border-CCCCCC focus:outline-none focus:border-sky-500 text-base md:text-base sm:text-sm xs:text-xs"
    onChange={handleChange}
  />
  <button 
    type="submit" 
    className="h-4  md:h-10 sm:h-5 xs:h-6 bg-teal-400 text-white rounded-r px-2 md:px-3 sm:px-2 xs:px-1 py-0 md:py-1 sm:py-0 xs:py-0 hover:bg-teal-500"
    onClick={handleClick}
  >
    Search
  </button>
  {/* <button 
    type="submit" 
    className="h-4  md:h-10 sm:h-5 xs:h-6 bg-teal-400 text-white rounded-r px-2 md:px-3 sm:px-2 xs:px-1 py-0 md:py-1 sm:py-0 xs:py-0 hover:bg-teal-500"
    onClick={toggleCarGrid}
  >
    test
  </button> */}
</div>
    
  </form>
    </>
};

export default SearchIcon;
