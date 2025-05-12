function sum(){

    let cache = {}
    
    return function(a, b){
        let key = `${a},${b}`
        if(cache[key]){
            console.log("Arguments already exist")
        }
        else{
            let result = a + b
            cache[key] = result
            console.log(result)
        }
    }
}
let memoize = sum()
memoize(10, 20)
memoize(20, 20)
memoize(10, 20)
memoize(10, 20)
