/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSort} from "@fortawesome/free-solid-svg-icons";

const Sorting = () => {
  return (
  <button>
      <div className='p-1'>
    <span className='pr-1'>Sort</span>
    <FontAwesomeIcon icon={faSort} style={{color: "#000000",}} />
    </div>
  </button>
  )
}

export default Sorting