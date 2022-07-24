//Best time to buy and sell stock

var maxProfit = function(prices){
    let maxProfit = 0;
    let minBuy = -Infinity;
    for(let i=0;i< prices.length;i++){
        if(minBuy > prices[i]){
            minBuy = prices[i];
        }
        const currentProfit = prices[i] - minBuy;
        if(currentProfit > maxProfit){
            maxProfit = currentProfit;
        }
    }
    return maxProfit;
}