function createIncrement() { // 1st function declared in scope
    let count = 0; //3rd count intialize to 0
    function increment() {
        count++; // function call count increment to 1 2 3 
    }
    let message = `Count is${count}`; //4th message is Count is0
    function log() { // last step it called and prints above message 
        console.log(message);
    }
    return [increment, log];
}
const [increment, log] = createIncrement(); // 2nd call the function
increment();//on these call count updates but message didn't update and count in message remain zero
increment();
increment();
log(); // when this function is called message has Count is0 that it prints
//output is Count is0
