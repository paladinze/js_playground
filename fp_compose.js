const addOne = data => data + 1;
const abs = data => Math.abs(data);

const compose = (f, g) => (data) => g(f(data));

const addOneAndAbs = compose(addOne, abs)


console.log(addOneAndAbs(-3))