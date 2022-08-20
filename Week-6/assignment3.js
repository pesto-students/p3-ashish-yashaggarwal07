// sort 0 1 2 
function sortZerosOnes(arr){
    let nextzero = 0;
    let nextTwo = arr.length -1;
    let i;
    while(i<= nextTwo){
        if(arr[i] == 0){
            let temp = arr[nextzero];
            arr[nextzero] = arr[i];
            arr[i] = temp;
            i++;
            nextzero++;
        }else if(arr[i] == 2){
            let temp = arr[nextTwo];
            arr[nextTwo] = arr[i];
            arr[i] = temp;
            nextTwo--;
        }else{
            i++;
        }
    }
    return arr
}
let arr =[0,2,1,2,0]
const output = sortZerosOnes(arr);