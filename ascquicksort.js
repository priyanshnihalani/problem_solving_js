function quicksort(array) {
    if (array.length <= 1) {
        return array
    }

    let pivot = array[0]
    let left = []
    let right = []

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i])
        }
        else {
            right.push(array[i])
        }
    }
    return [...quicksort(left), pivot, ...quicksort(right)]
}

console.log(quicksort([5, 2, 9, 3, 6, 1, 8, 4, 7]))