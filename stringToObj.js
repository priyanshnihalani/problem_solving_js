function stringToObject(str, finalValue){
    let arr = str.split('')
    let obj = {}
    let current = obj // {} {a: {}}
    for(let i=0; i<arr.length; i++){
        let key = arr[i] // key = b;
        current[key] = (i == arr.length - 1 ) ? finalValue: {}
        current = current[key]
    }
    return obj
}
console.log(stringToObject('abc', "SomeValue"))