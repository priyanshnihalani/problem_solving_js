function wordFrequency(str1, str2) {
    if (str1.length !== str2.length) {
        return "Please Enter String of Similar Length"
    }
    else{
        let obj1 = {}
        let obj2 = {}

        let arr1 = str1.toLowerCase().split('')
        let arr2 = str2.toLowerCase().split('')

        for (const element of arr1) {
            obj1[element] ? obj1[element] += 1 : obj1[element] = 1
        }
        for (const element of arr2) {
            obj2[element] ? obj2[element] += 1 : obj2[element] = 1
        }

        for (const key in obj1) {
            if(obj1[key] !== obj2[key]){
                return false
            }
        }
        return true
    }
}

console.log(wordFrequency("priyansh", "hpiyrnas"))

