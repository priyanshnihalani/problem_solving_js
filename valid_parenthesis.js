function validParenthis(s){
    let arr = []
    let map = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }

    for(let char of s){
        if(char == "{" || char == "[" || char == "("){
            arr.push(char)
        }
        else{
            if(arr.length == 0 || arr.pop() !== map[char]){
                return false
            }
        }
    }
    return arr.length == 0;
}

"}])"

['(', '[', '{'] // valid

"{[(])}"

['{', '[', '('] // invalid