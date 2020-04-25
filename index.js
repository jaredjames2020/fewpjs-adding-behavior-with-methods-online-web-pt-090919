// Your code here
class Cat{
  constructor(name, sex){
    this.name = name;
    this.sex = sex;
    speak(){
      return `${name} says meow!`;
    } 
  }
  
}

class Dog {
  constructor(name, sex){
    this.name = name;
    this.sex = sex;
    this.speak = `${name} says woof!`
  }
}

class Bird{
  constructor(name, sex){
    this.name = name;
    this.sex = sex;
    this.speak = `${name} says`
  }
}