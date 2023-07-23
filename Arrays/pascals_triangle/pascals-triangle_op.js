var generate = function(numRows) {
    let result=[]
    for(let i=0;i<numRows;i++){
        let ans=1
        let arr=[]
        let row=i+1;
        for(let j=0;j<=i;j++){
            ans=ans*(row--/j)
           if(ans===Infinity){
               ans=1
               arr.push(ans)
           }else{
               arr.push(ans)
           }
            
        }
        result.push(arr)
    }
    return result;
};
