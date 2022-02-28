import React from 'react';
import './searchBox.css';

const SearchBox = ({searchChange}) =>{

    return(
        <div>
            <input             
            type='search' 
            placeholder='Search Customer Name' 
            onChange = {searchChange}
            className='input-field'
            />

            {/* <button className='filter-btn' onClick={btnChange}>Filter</button> */}
        </div>
    );
}


export default SearchBox;