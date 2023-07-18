function createCat(arr) {
  let cats = [];
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    moew() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (let index = 0; index < arr.length; index++) {
    let catData = arr[index].split(" ");
    let name, age;
    [name, age] = [catData[0], catData[1]];
    cats.push(new Cat(name, age));
  }
  for (const cat of cats) {
    cat.moew();
  }
}
