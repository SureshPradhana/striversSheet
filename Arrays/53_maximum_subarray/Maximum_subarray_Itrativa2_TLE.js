//ITERATIVE APPROACH O(n^2) TOE
var maxSubArray = function(nums) {
    let max=Number.NEGATIVE_INFINITY;
    for(let i=0;i<nums.length;i++){
        let sum=0;
        for(let j=i;j<nums.length;j++){
                sum+=nums[j] 
                max=Math.max(max,sum)
        }
    }
    return max
};
