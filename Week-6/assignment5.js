//Pair with diffrence
var findPair = function (arr, n) {
    let i = 0; j = 1;
    while (i < arr.length && j < arr.length) {
        if (i != j && arr[j] - arr[i] == n) {
            return 1;
        } else if (arr[j] - arr[i] < n) {
            j++
        } else {
            i++;
        }
    }
    return 0;
}