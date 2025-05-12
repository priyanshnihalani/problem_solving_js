function productoOfNextTwo(arr) { 
    if (arr.length < 2) {
        return []; 
    }

    let array = []
    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 2) {
            array.push(arr[i+1] * arr[0])
        }
        else if(i== arr.length - 1){
            array.push(arr[0] * arr[1])
        }
        else{
            array.push(arr[i+1] * arr[i+2])
        }
    }
    return array
}

console.log(productoOfNextTwo([3, 4, 5, 6, 7]))