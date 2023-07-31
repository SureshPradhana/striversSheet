//Dutch National Flag algorithm o(N)
var sortColors = function(nums) {
    let low=0;
    let mid=0;
    let high=nums.length-1;
    while(mid<=high){
        if(nums[mid]===0){
            swap(nums,mid,low)
            low++;
            mid++;
        }else if(nums[mid]===1){
            mid++
        }else if(nums[mid]===2){
            swap(nums,mid,high)
            high--;
        }
    }
    function swap(eles, i, j) {
        let temp = eles[i];
        eles[i] = eles[j];
        eles[j] = temp;
    }
};
