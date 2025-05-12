function reverseWord(string){
    let sentence = ""
    let word = ""

    for(let i=0; i<string.length; i++){
        if(string[i] !== " "){
            word += string[i]
            // Priyansh
        }
        else{
            sentence = word /** World */ + " " + sentence /**Hello  */ ; // Hello + " "
            word=""
        }
    }
    sentence = word /**Priyansh */ + " " + sentence /** World Hello  */;
    return sentence.trim();
}
console.log(reverseWord("Hello World Priyansh Chirag Jayesh Munshi Kartik"))