import React, { useState } from 'react';
import { MenuList } from './menu';
import MenuItem from './MenuItem';
import MenuSection from './MenuSection';
import { useSearch } from '../SearchContext';


function SearchSection(props) {

    const{searchData,handleSearchChange, setSearchData, filter, handleFilterChange, 
         isAllSelected}= useSearch ();
   
    return (
        
      <div className="container p-0 pt-2 sticky-top" style={{zIndex: 999}} id="searchboxSection">
             <div className="p-1  mt-n3 rounded position-relative"  style={{ backgroundColor: 'SlateGrey' }}>
                <div className="input-group mt-1 mb-1 rounded shadow-sm overflow-hidden ">
                    <div className="input-group-prepend  ">
                      
                        <select className="border-0 btn btn-outline-secondary text-dark btn-block"
                            style={{ backgroundColor: 'Gainsboro' }}
                            value={filter}
                            onChange={handleFilterChange}
                        >
                            <option value="0">All</option>
                            <option value="1">Veg</option>
                            <option value="2">Non-Veg</option>
                        </select>
                    </div>
                    <input
                        id="searchbox"
                        type="search"
                        className="shadow-none border-0 form-control"
                        onChange={handleSearchChange}
                        placeholder="Search for dishes"
                        value={searchData}
                    />
                </div>
               

            </div>
          
          
            
        </div>
    );
}

export default SearchSection;
