// Question Write a function called vowelCount which accepts a string and 
//returns a map where the keys arenumbers and the values are the count of the vowels in the string

const vowelCount =(str)=>{
    const mapVowel = new Map();
    for(let char of str){
        if('aeiou'.includes(char.toLowerCase())){
            mapVowel.has(char.toLowerCase()) ? mapVowel.set(char.toLowerCase(), mapVowel.get(char.toLowerCase()) +1) :
            mapVowel.set(char.toLowerCase(),1);
        }
    }
    console.log(mapVowel)
}

vowelCount('Assignment map')
//[[Entries]]
//0: {"a" => 2}
//1: {"i" => 1}
//2: {"e" => 1}
//size: 3
//[[Prototype]]: Map