/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let n=Array(matrix.length-1).fill(0)
    let m=Array(matrix[0].length-1).fill(0)
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j]===0){
                n[i]=1;
                m[j]=1;
            }
        }
    }
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(n[i] === 1 || m[j] === 1){
                matrix[i][j]=0;
            }
        }
    }
    return matrix
};
