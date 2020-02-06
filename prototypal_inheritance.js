const grandpa = {
  level: 10,
  class: 'warrior',
  isMagician: true,
  fight() {
    console.log('granpa fighting');
  }
};

// inherit using Object.create
const grandson = Object.create(grandpa);
grandson.level = 5;

for (let prop in grandson) {
  if(grandson.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

// extend Date constructor
const currYear = new Date('1992-10-21').getFullYear();
console.log("currYear", currYear);
Date.prototype.getLastYear = function() {
  console.log(this)
  return this.getFullYear() - 1;
};
const lastYear = new Date('1992-10-21').getLastYear();
console.log("lastYear", lastYear);

// extend Array constructor
const myArray = [1, 2, 3];
Array.prototype.map = function() {
  this.forEach(item => console.log(item))
}
console.log('myArray', myArray.map())

