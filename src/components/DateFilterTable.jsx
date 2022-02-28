import React, { useState } from "react";
import FilteredTable from "./FilteredTable";
import "./ProductTable/table-styles.css";


function DateFilterTable({ data, inp, stat }) {

  const [status, setStatus] = useState(true);
  let newData = [...data];
  

  // I have used the below logic to filter the data based on date and also be able to search from the sorted list
  const filteredData = newData.filter(object =>{
    return object.customer.includes(inp);    
  })
  

  return (
    <div>
      {
        status ? <FilteredTable data={filteredData} /> : <></>
      }
    </div>
  );
}

export default DateFilterTable;
