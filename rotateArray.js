// function rotateArray(array, n) {
//     let value = n * -1
//     let one = array.slice(0, value)
//     let two = array.slice(value)
//     let three = [...two, ...one]
//     console.log(three)
// }
// rotateArray([2, 3, 4, 5, 6, 7, 8, 9], 3) // [2, 3, 4, 5, 6]


// Optimized Solution

function rotateArray(array, k) {
    let size = array.length;

    if (k > size) {
        k = k % size;
    }

    reverseArray(array, 0, size - 1); // [9, 8, 7, 6, 5, 4, 3, 2]
    reverseArray(array, 0, k - 1); // [7, 8, 9, 6, 5, 4, 3, 2]
    reverseArray(array, k, size - 1); // [7, 8, 9, 2, 3, 4, 5, 6]

    function reverseArray(array, start, end) {
        while (start < end) {
            let temp = array[start];
            array[start] = array[end];
            array[end] = temp;
            start++;
            end--;
        }
    }

    console.log(array)
}

rotateArray([2, 3, 4, 5, 6, 7, 8, 9], 10)