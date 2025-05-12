let string1 = "Nan"
let string2 = string1.toLowerCase();

let arr = string1.toLowerCase().split('');
let string3 = ""
for (let i = arr.length - 1; i >= 0; i--) {
    string3 += arr[i] + ""
}

if (string3 == string2) {
    console.log("String is palindrom")
}
else {
    console.log("String is not palindrom")
}

// const checkPallindrome = (str) => {
//     const len = str.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - i - 1]) {
//             return "Not pallindrome";
//         }
//     }
//     return "pallindrome";
// };
// console.log(checkPallindrome("madam"));