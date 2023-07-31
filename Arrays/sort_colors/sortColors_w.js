//this sort algorithm doesnot use in place it gives wrong solution
//the correct solutin is in sortCOlors_op.js Dutch national flag algorithm
var sortColors = function(nums) {
    let red=0
    let white=0
    let blue=0
    let newarr=[]
    for(let num in nums){
        if(num==0){
            red++
        }else if(num==1){
            white++
        }else{
            blue++
        }
    }
    while(red>0){
        newarr.push(0)
        red--
    }
    while(white>0){
        newarr.push(1)
        white--
    }
    while(blue>0){
        newarr.push(2)
        blue--
    }
    return newarr
};
