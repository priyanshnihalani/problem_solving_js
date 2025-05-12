function findConsecutive(array) {
    let obj = {}
    for (let i = 0; i < array.length; i++) {
        if(array.indexOf(array[i]) == i){
            obj[array[i]] = 1
        }
        else{
            obj[array[i]] += 1
        }
    }
    let max = obj[array[0]];
    let maxelement;
    for (const key in obj) {
        if(obj[key] > max){
            max = obj[key]
            maxelement = key
        }
    }
    
    return `Most Consecutive Element is: ${maxelement} and its max value is: ${max}`
}
console.log(findConsecutive([1, 2, 2, 1, 1, 2, 2]))