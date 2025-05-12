function maxNumber(arr){
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    console.log(max)
}

let arr = [1, 2, 333, 4456, 5, 6, 7, 8]
maxNumber(arr)