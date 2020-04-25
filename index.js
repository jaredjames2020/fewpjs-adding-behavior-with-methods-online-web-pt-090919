// Your code here
class Cat{
  constructor(name, sex){
    this.name = name;
    this.sex = sex;
    this.speak = function() {
      return `${name} says meow!`;
    }; 
  }
  
}

class Dog {
  constructor(name, sex){
    this.name = name;
    this.sex = sex;
    this.speak = function() {
      `${name} says woof!`;
    };
  }
}

class Bird{
  constructor(name, sex){
    this.name = name;
    this.sex = sex;
    this.speak = `${name} says`
  }
}