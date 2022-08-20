//spiral order matrix 

let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]
let m = arr.length;
let n = arr[0].length;
let k = 0;
let l = 0;
let newArr = [];
while (k < m && l < n) {
    for (let i = l; i < n; ++i) {
        newArr.push(arr[k][i]);
    }
    k++;
    for (let i = k; i < m; ++i) {
        newArr.push(arr[i][n - 1])
    }
    n--;
    if (k < m) {
        for (let i = n - 1; i >= l; --i) {
            newArr.push(arr[m - 1][i])
        }
        m--;
    }
    if (l < n) {
        for (let i = m - 1; i >= k; --i) {
            newArr.push(arr[i][l])
        }
        l++;
    }
}
