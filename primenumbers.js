function prime(num){
    let flag = 0
    for(let i = 2; i <= num/2; i++){
        if(num%i == 0){
            flag = 0
        }
        else{
            flag = 1
        }
    }
    if(flag == 0){
        console.log("Number is Not Prime")
    }
    else{
        console.log("Number is Prime")
    }
}
prime(23)