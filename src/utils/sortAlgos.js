// This file contains all the tyes of alogrithms used for sorting the array

// Algorithm for bubble sort
export const bubbleSort = (ijRef, arrayForSort, setArrayForSort) => {

    // Variable declaration for the bubble sort
    const ij = ijRef.current;
    const i = ij.i;
    const j = ij.j;
    const newArray = [...arrayForSort];
    const arrayLength = newArray.length;
    let isSwapped = false;

    // bubble sort algorithm
    if(newArray[j] > newArray[j+1]) {
        [newArray[j], newArray[j+1]] = [newArray[j+1], newArray[j]];
        isSwapped = true;
    }

    // loop for bubble sort
    if(j < arrayLength - i) {
        ij.j++;
    } else if(ij.i < arrayLength) {
        ij.j = 0;
        ij.i++;
    }

    // this will trigger the next render
    // and the loop will continue untill ij.i < n
    setTimeout(() => {
        if(ij.i >= arrayLength) {
            isSwapped = false;
        }
        setArrayForSort(newArray);
    }, isSwapped ? 10 : 0);
}

