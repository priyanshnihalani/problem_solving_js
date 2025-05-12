let str = "Hi I'm Saikrishna Iam a UI Developerersssss";

function longestKeyword(string) {
    let stringarr = string.split(' ');
    let longestWord = ""; 

    for (let i = 0; i < stringarr.length; i++) {
        if (stringarr[i].length > longestWord.length) {
            longestWord = stringarr[i]; 
        }
    }

    return longestWord; 
}

console.log(longestKeyword(str));
