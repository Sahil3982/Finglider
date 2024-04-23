import React, { useContext, createContext, useState } from "react";
import { MenuList } from '../src/Components/menu.js';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const menudata = MenuList;
    const [searchData, setSearchData] = useState("");
    const [filter, setFilterChange] = useState("0");
    

    const handleFilterChange = (e) => {
        setFilterChange(e.target.value);
    }

    const handleSearchChange = (e) => {
        setSearchData(e.target.value);
    }

   

    const isAllSelected = filter === "0" && !searchData;

    return (
        <SearchContext.Provider value={{
            searchData,
            setSearchData,
            handleSearchChange,
            filter,
            handleFilterChange,
            isAllSelected,
           
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within a CartProvider');
    }
    return context;
}
