function findLargestElement(array){
    let max = Number.NEGATIVE_INFINITY;

    function traversArray(array){
        for(let i=0; i<array.length; i++){
            if(Array.isArray(array[i])){
                traversArray(array[i])
            }
            else{
                if(array[i] > max){
                    max = array[i]
                }
            }
        }
    }
    traversArray(array);
    return max;
}
console.log(findLargestElement([[3, 4, 58], [709, 8, 9, [10, 1101]]]))