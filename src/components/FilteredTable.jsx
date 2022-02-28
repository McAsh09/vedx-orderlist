import React from "react";
import "./ProductTable/table-styles.css";


function FilteredTable({ data }) {

  return (
    <div>      
      <table className="table-style">
        <caption>Order List</caption>
        {/* Headings created of different properties  */}
        <thead>
          <tr>
            <th className="heading">OrderID</th>
            <th className="heading">Customer</th>
            <th className="heading">Address</th>
            <th className="heading">Country</th>
            <th className="heading">Date</th>
            <th className="heading">Product Title</th>
            <th className="heading">Product Description</th>
            <th className="heading">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* mapping through entire data provided and extracting the values from them */}
          {data.map((object) => ( 
            <tr key={object.order_id}>
              <td className="table-data">{object.order_id}</td>
              <td className="table-data">{object.customer}</td>
              <td className="table-data">{object.address}</td>
              <td className="table-data">{object.country}</td>
              <td className="table-data">{object.date}</td>
              <td className="table-data">{object.product_title}</td>
              <td className="table-data">{object.product_description}</td>
              <td className="table-data">{object.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FilteredTable;
