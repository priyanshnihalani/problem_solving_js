function flattenArray(array) {
    let newArray = []
    function flatArray(array) {
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                flatArray(array[i])
            }
            else {
                newArray.push(array[i])
            }
        }

    }
    flatArray(array);
    return newArray;
}
console.log(flattenArray([1, [2, [3, 4], [7,5]], 6]))