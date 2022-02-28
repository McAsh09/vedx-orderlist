import React, { useState,useEffect } from 'react';
import ProductTable from './components/ProductTable/ProductTable';

function App() {
  
  useEffect(() =>{
    fetchData();
  }, []); // I have used it here to fetch data as soon as the page is rendered
  
  const[data, setData] = useState([]);
  
  const fetchData = () =>{
    fetch("https://my-json-server.typicode.com/Ved-X/assignment/orders")
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    }); // I have used 'fetch' in order to get data from the given API since we were not allowed to use external libraries
  }

  return (
    <div className="App">        
      <ProductTable data={data} />     {/* This is the main component from where I will filter the data depending on the input*/}
    </div>
  );
}

export default App;
