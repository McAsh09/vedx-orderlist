import React, { useState } from "react";
import SearchBox from "./SearchBox/SearchBox";
import FilteredTable from "../FilteredTable";
import BtnFilterTable from "../BtnFilterTable";
import DateFilterTable from "../DateFilterTable";
import "./table-styles.css";
import "./productTable.css";

function ProductTable({ data }) {

  let newData = [...data]; // I have used spread operator here to clone my data for using in button filter
  let dateData = [...data]; // I have used spread operator here to clone my data again for using in date filter

  const [input, setInput] = useState(""); // I have initialised this to get input from the user and update it for searching customer
  const [statusFilter, setStatusFilter] = useState(true); // Initialised this to set initial state for button filter
  const [dateClicker, setDateClicker] = useState(false); // Initialised this to set initial state for date filter
  
  
  const searchHandler = (e) =>{   
    setInput(e.target.value); // To get input value from the user 
    // console.log(e.target.value);
  }  


  const filteredData = newData.filter(object =>{
    return object.customer.includes(input); // This function returns the data based on the user input in search field
  })

  const btnFilter = newData.sort(function(a, b){
    // Used the given logic to sort the data according to 'status'
    if(a.status < b.status) { return -1; }
    if(a.status > b.status) { return 1; }
    return 0; 
  })

  const dateFilter = dateData.sort((a, b) =>
  a.date.split('/').reverse().join().localeCompare(b.date.split('/').reverse().join() // Used the following logic to sort data according to 'date'
  )); 


  const clickHandler = () =>{    
    setStatusFilter(!statusFilter); // updating 'status' state
  }

  const dateHandler = () =>{   
    setDateClicker(!dateClicker); // updating 'date' state
  }

  return (
    <div>
      <SearchBox searchChange={searchHandler}/> {/* created this component to provide search field to the user */}
      <button className='btn' onClick={clickHandler}>Filter Status</button>  
      <button className='btn date' onClick={dateHandler}>Filter Date</button>  
      {/* Used the below logic to filter data depending on status and date */}
      {
        !dateClicker ? (statusFilter ? <FilteredTable data={filteredData} /> : <BtnFilterTable data={btnFilter} inp={input} stat={statusFilter}/>) : <></>
      } 

      {
        dateClicker ? <DateFilterTable data={dateFilter} inp={input} /> : <></> 
      }    

    </div>
  );
}

export default ProductTable;
