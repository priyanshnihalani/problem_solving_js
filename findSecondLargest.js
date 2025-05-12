// panji dabyal

// function findSecondLargest(arr) {
//     let max = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     let secondMax; 
//     let secondMaximum;
//     for (let i = 0; i < arr.length; i++) {
//         let diff = max - arr[i] 
//         if(max == arr[i]){
//             continue
//         }
//         if(secondMax == undefined){
//             secondMax = diff;
//         }
//         if(diff < secondMax){
//             secondMax = diff;
//             secondMaximum = arr[i]
//         }
//     }
//     return secondMaximum
// }

// console.log(findSecondLargest([1, 3, 2]))

// Valid Method

function findSecondLargest(arr){
    let max = -Infinity
    let secondMax = -Infinity

    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){     
            secondMax = max; 
            max = arr[i] 
        }
        else if(arr[i] > secondMax && arr[i] !== max){ 
            secondMax = arr[i]
        }
    }
    return secondMax === -Infinity ? null : secondMax;
}
console.log(findSecondLargest([1, 2, 3, 4, 10, 8])); 
console.log(findSecondLargest([10, 10, 10])); 
console.log(findSecondLargest([10]));
