function fibonnaci(num){
    if(num<=1){
        return 1
    }
    else{
       let series = [0, 1];
       for(let i=2; i<=num; i++){
        series.push(series[i-1] + series[i-2])
       }
       return series
    }
}
const fibonnacinumbers = fibonnaci(10);
console.log(fibonnacinumbers)