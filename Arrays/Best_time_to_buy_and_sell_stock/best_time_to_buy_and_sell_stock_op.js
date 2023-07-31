var maxProfit = function(prices) {
    let min=prices[0]
    let max=0;
    for(let p of prices){
        if(min>p){
            min=p
        }
        if(p-min>max){
            max=p-min;
        }
    }
    return max;
};
