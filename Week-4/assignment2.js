//Assignment 2
var Person = function (){};

Person.prototype.initialize = function (name,age){
    this.name = name;
    this.age = age;
}
 var Teacher = function(name,age){
    Person.call(this,name,age)
 }

Teacher.prototype.teach = function(subject){
    return `${this.name} is now teaching ${subject}`;
}

Object.setPrototypeOf(Teacher.prototype,Person.prototype);

var man = new Teacher();
man.initialize('Yash',25);
console.log(man.teach('Inheritance')); // Yash is teaching Inheritance