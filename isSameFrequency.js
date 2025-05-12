function isSameFrequency(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    else {
        let obj1 = {}
        let obj2 = {}

        for (const val of arr1) {
            obj1[val] ? obj1[val] += 1 : obj1[val] = 1
        }
        for (const val of arr2) {
            obj2[val] ? obj2[val] += 1 : obj2[val] = 1
        }

        for (const key in obj1) {
            let squaredValue = key * key;
            if (!(squaredValue in obj2)) {
                return false;
            }
            if (obj2[squaredValue] !== obj1[key]) {
                return false
            }
        }
        return true
    }
}

console.log(isSameFrequency([1, 2, 3], [1, 4, 9])); // true
console.log(isSameFrequency([1, 2, 3], [1, 4, 16])); // false
console.log(isSameFrequency([1, 2, 1], [1, 1, 4])); // true
console.log(isSameFrequency([1, 2, 3], [1, 9])); // false
console.log(isSameFrequency([1, 2, 3], [1, 9, 9]));  //false
