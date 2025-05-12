// let arr = [1, 2, 3, 3, 4, 5, 5];

// let newarr = [] 
// for(let i = 0; i< arr.length; i++){
//     if(arr.indexOf(arr[i]) == i){
//         newarr.push(arr[i])
//     }
// }
// console.log(newarr)

/**
 *  0 == 0 (1) element newarr
 *  1 == 1 (2) element newarr
 *  2 == 2 (3) element newarr
 *  2 == 3 (3) element ---------
 *  4 == 4 (4) element newarr
 *  5 == 5 (5) element newarr
 *  1 == 6 (2) element ---------
 */


// console.log(Array.from(new Set(arr)))


// function removingDuplicates(arr){
//     for(let i=0; i<arr.length - 1; i++){
//         if(arr[i] === arr[i+1]){
//             arr.splice(i + 1, 1)
//             i--
//         }
//     }
//     return arr
// }
// console.log(removingDuplicates(arr))
let arr = [1, 2, 3, 3, 4, 5, 5];

// function removingDuplicates(arr){
//     if(arr.length == 0 ) return 0
//     let i = 0; // 2
//     for(let j = 1; j<arr.length; j++){
//         if(arr[i] != arr[j]){
//             i++
//             arr[i] = arr[j]
//         }
//     }
//     return arr.slice(0, i+1)
// }
// console.log(removingDuplicates(arr))

function removingDuplicates(arr){
    if(arr.length == 0) return 0

    let i = 0;
    for(let j=1; j<arr.length; j++){
        if(arr[i] != arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return arr.slice(0, i+1)
}
console.log(removingDuplicates(arr))