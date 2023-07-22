/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j]===0){
                for(let m=0;m<matrix.length;m++){
                    if(matrix[m][j] != 0){
                        matrix[m][j]=null
                    }
                }
                for(let n=0;n<matrix[0].length;n++){
                    if(matrix[i][n] != 0){
                        matrix[i][n]=null
                    }
                }
            }
        }
    }
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j]===null){
                matrix[i][j]=0;
            }
        }
    }
    return matrix
};
