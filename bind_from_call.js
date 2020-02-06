// create bind from call and apply
Function.prototype.bind = function(context) {
  return (...params) => {
    this.call(context, ...params)
  }
}

const a = {
  power: 1,
  fight(param1, param2) {
    damage = (param1 + param2) * this.power;
    console.log(damage);
  }
};
const b = {
  power: 2
};

a.fight.bind(b)(1,2);