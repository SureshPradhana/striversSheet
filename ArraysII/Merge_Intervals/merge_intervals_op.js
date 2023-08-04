// optimal o(n)
const merge = function(arr) {
    arr.sort((a, b) => a[0] - b[0]);
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (res.length === 0 || arr[i][0] > res[res.length - 1][1]) {
            res.push(arr[i]);
        }
        if (res[res.length - 1][1] >= arr[i][0]) {
            res[res.length - 1][1] = Math.max(arr[i][1], res[res.length - 1][1]);
        }
    }
    return res;
};
