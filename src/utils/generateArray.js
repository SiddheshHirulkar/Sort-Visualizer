export const createNewArray = (setNewArray) => {
    let myArray = [];
    
    // Creates 2, 3 and single digit elements for array
    for(let i=1; i<=50; i++) {
        let newArrayElement = Math.random();

        const createNewPercentage = (multiplier) => {
            let percentageValue = 0;
            let newPercentageValue = 0;
            
            newArrayElement = newArrayElement * multiplier;
            newArrayElement = Math.trunc(newArrayElement);
            percentageValue = ((newArrayElement/10));
            newPercentageValue = percentageValue * 5;
            
            return newPercentageValue;
        }

        if(i%4 === 0) {
            let addNumbers = createNewPercentage(100);
            myArray.push(addNumbers);

        } else if(i%5 === 0) {
            let addNumbers = createNewPercentage(1000);
            myArray.push(addNumbers);

        } else if(i%3 === 0) {
            let addNumbers = createNewPercentage(10);
            myArray.push(addNumbers);

        } else if(i%2 === 0) {
            let addNumbers = createNewPercentage(100);
            myArray.push(addNumbers);

        } else {
            let addNumbers = createNewPercentage(1000);
            myArray.push(addNumbers);
        }
    }
    setNewArray(myArray);
}