//TIME LIMIT ERROR ITERATIVE APPROACH O(n^3)
var maxSubArray = function(nums) {
    let max=Number.NEGATIVE_INFINITY;
    for(let i=0;i<nums.length;i++){
        for(let j=i;j<nums.length;j++){
            let sum=0;
            for(let k=i;k<=j;k++){
                sum+=nums[k]
            }
            max=Math.max(max,sum)
            
        }
    }
    return max
};
