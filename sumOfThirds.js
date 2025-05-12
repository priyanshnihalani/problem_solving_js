function sumOfThirds(arr){
    if(arr.length == 0 || arr.length < 3){
        return 0
    }
    else if(!Array.isArray(arr)){
        return "Please pass Array"
    }
    else{
        let sum = 0;
        for(let i = 0; i < arr.length; i+=3){
            sum += arr[i]
        }
        return sum;
    }
}

let arr = [1, 2, 3, 4, 5, 6]
console.log(sumOfThirds(arr))