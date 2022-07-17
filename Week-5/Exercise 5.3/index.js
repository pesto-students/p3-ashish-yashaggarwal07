//Write a function called hasDuplicate which accepts an array and 
//returns true or false if that arraycontains a duplicate

const hasDuplicate =(arr)=>{
    new Set(arr).size === arr.length;
}
console.log(hasDuplicate([1,3,4,2]) ? 'this array does not have duplicate' : 'this array have duplicate')
//'this array does not have duplicate'
console.log(hasDuplicate([1,3,4,2,1]) ? 'this array does not have duplicate' : 'this array have duplicate')
//this array have duplicate