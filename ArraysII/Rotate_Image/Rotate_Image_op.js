// optimal solution using swap while traversing
// steps
// 1.transpose matrix
// 2.reverse each row
var rotate = function(matrix) {
    let l =matrix.length;
	//transpose matrix
    for(let i=0;i<l;i++){
        for(let j=i;j<l;j++){
            let temp=matrix[i][j]
            matrix[i][j]=matrix[j][i]
            matrix[j][i]=temp;
        }
    }
	//reverse each row
    for(let i=0;i<l;i++){
        matrix[i].reverse();
    }
    return matrix
};
