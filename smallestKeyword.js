let str = "Hi I'm Saikrishna Iam a UI Developerersssss";

function smallestKeyword(string) {
    let stringarr = string.split(' ');
    let smallWord = stringarr[0]; 

    for (let i = 0; i < stringarr.length; i++) {
        if (stringarr[i].length < smallWord.length) {
            smallWord = stringarr[i]; 
        }
    }

    return smallWord; 
}

console.log(smallestKeyword(str));
