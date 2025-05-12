function twoSum(array, targetElement) {

    let map = new Map()
    let arrs = []


    for (let arr = 0; arr < array.length; arr++) {
        let compliment = targetElement - array[arr]

        if(!map.has(compliment)){
            map.set(array[arr], arr)
        }
        else{
            arrs.push([map.get(compliment), arr])
        }

    }
    return arrs
}

console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8))
