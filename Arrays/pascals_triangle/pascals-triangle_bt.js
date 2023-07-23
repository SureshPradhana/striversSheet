var generate = function(numRows) {
    let result=[]
    for(let i=0;i<numRows;i++){
        let arr=[]
        for(let j=0;j<=i;j++){
            arr.push(ncr(i,j))
        }
        result.push(arr)
    }
    return result;
};
function ncr(n,r){
    let ans=1
    for(let a=0;a<r;a++){
        ans=ans*(n-a);
        ans=ans/(a+1)
    }
    return ans;
}
