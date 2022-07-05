//Bind function
const module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  }
console.log(module.getX())
// this will work fine but what when we give refrence
const unboundGetX = module.getX;
console.log(unboundGetX())
// The function gets invoked at the global scope
// output: undefined
const boundGetX = unboundGetX.bind(module);
console.log(boundGetX())
//it will give 42 output because bind create new function and when call has its 'this' keyword set to
//provided value with a given sequence of argument preceding any provided when the new function is called.

// <==---------Call function----------==>
function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);
  //output : cheese
  //The call() method calls a function with a given this value and arguments provided individually.

  // <==---------Apply function----------==>
  const person = {
    firstName: 'John',
    lastName: 'Doe'
}
function greet(greeting, message) {
    return `${greeting} ${this.firstName}. ${message}`;
}
let result = greet.apply(person, ['Hello', 'How are you?']);

console.log(result);
// the only diffrence btw call and apply is apply take arguments in array of strings