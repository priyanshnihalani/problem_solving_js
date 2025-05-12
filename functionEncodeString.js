function encodeString(string){
    if (string.length == 0) return ""
    
    let count = 1;
    let result = "";
    for(let i=1; i<string.length; i++){
        if(string[i] === string[i-1]){
            count++
        }
        else{
            result += count + string[i-1]
            count = 1;
        }
    }
    result += count + string[string.length - 1]
    return result
}
console.log(encodeString("abbcccddddeea"))