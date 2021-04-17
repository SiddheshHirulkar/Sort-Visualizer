import React, { useState, useEffect, useRef } from 'react';
import './style.css';

import Navbar from './components/Navbar';
import SortContent from './components/SortContent';
import { createNewArray } from './utils/generateArray';
import { bubbleSort } from './utils/sortAlgos';

const App = () => {
  // Variable Declaration

  // const [newArrayOfNum, setNewArrayOfNum] = useState([44, 3, 12, 33, 66, 234, 55]);
  const [arrayForSort, setArrayForSort] = useState([44, 3, 12, 33, 66, 234, 55]);
  const [isSorting, setIsSorting] = useState(false);
  const [isNewArray, setIsNewArray] = useState(false);
  const ijRef = useRef({ i:0, j:0 });

  useEffect(() => {

    // Creates new Array through auxillary function createNewArray
    if(isNewArray) {  
      createNewArray(setArrayForSort);  
      setIsNewArray(false);
    }
    
    // Checks if user has clicked sort button and then sorts the array using algorithm selected by the user
    if(isSorting) {

      // Algorithm for bubble sort
      bubbleSort(ijRef, arrayForSort, setArrayForSort);
    }
    
  },[arrayForSort, setArrayForSort, isSorting, ijRef, isNewArray]);

  // generates new array of random elements using auxillary function generateArray()
  const generateNewArray = () => {
    setIsSorting(false);
    setIsNewArray(true);
  }

  // Sorts the array using the algorithm selected by the end user
  const sortArray = () => {
    ijRef.current.i = 0;
    ijRef.current.j = 0;
    setIsSorting(true);
  }

  return(
    <div>
      <Navbar 
        generateNewArray={generateNewArray} 
        sortArray={sortArray}
      />
      <SortContent newArrayOfNum={arrayForSort} />
    </div>
  );
}

export default App;