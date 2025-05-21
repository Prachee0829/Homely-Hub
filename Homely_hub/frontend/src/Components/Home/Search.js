import { DatePicker } from "antd";
import React, { useState } from 'react';

const Search = () => {
    const { RangePicker } = DatePicker;
    const[keyword,setkeyword] = useState({});

    // storing the datarange value
    const[value,setvalue] = useState([]);

    function returnDates (date,dateString) {
        // setting the date range value in state
        setvalue([date[0], date[1]]);
        // updating keyword object with date range
        updateKeyword("dateIn", dateString[0]);
        updateKeyword("dateOut", dateString[1]);
    }

    // function to update a specific field in the keyword space object
    const updateKeyword = (field,value) => {
       setkeyword((prevKeyword) => ({
       ...prevKeyword,
       [field]: value,
    }));
    };


  return (
    <>
     <div className="searchbar">

        {/* input field to searching destinations */}
        <input
          className="search"
          id="search_destination"
          placeholder="Search destinations"
          type="text"
          value={keyword.city}
          onChange={(e) => updateKeyword("city", e.target.value)}
        />

       {/* date range picker */}
       <space direction="vertical" size={12} className="search">
         <RangePicker
         value={value}
           format="YYYY-MM-DD"
           picker="date"
           className="date_picker"
           disabledDate={(current) => {
            return current && current.isBefore(Date.now(), "day");
           }}
           onChange={returnDates}
         />
        </space>

        {/* Input field for adding guest */}

        <input
           className="search"
           id="addguest"
           placeholder="Add guest"
           type="number"
           value={keyword.guests}
           onChange={(e) => updateKeyword("guests", e.target.value)}
        />

     {/* Search icon */}

    <span className="material-symbols-outlined searchicon">search</span>
     </div>
    </>
  )
}

export default Search