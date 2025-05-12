function mergeArray(arr1, arr2) {
    let mergedArray = [...arr1, ...arr2];
    
    for (let i = 0; i < mergedArray.length - 1; i++) {
        for (let j = 0; j < mergedArray.length - 1; j++) {
            if (mergedArray[j] > mergedArray[j + 1]) {
                let temp = mergedArray[j];
                mergedArray[j] = mergedArray[j + 1]
                mergedArray[j + 1] = temp;
            }
        }
    }
    return mergedArray
}
console.log(mergeArray([1, 4, 7], [0, 5, 8]))