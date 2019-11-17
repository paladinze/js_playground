// implement a cart function

const user = {
  name: 'Ze',
  active: true,
  cart: [],
  purchases: []
}

// create a meta functio that process data like a pipeline using functional programming
const compose = (f,g) => (...args) => f(g(...args));
const purchaseItem = (...funcs) => funcs.reduce(compose);

let temp = purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItem,
  addItemToCart
)(user, {name: 'gundam', price: 1000})
console.log(temp)

// add item to cart
function addItemToCart(user, item) {
  const updatedCart = user.cart.concat(item)
  return Object.assign({}, user, {cart : updatedCart})
}

// add tax to items in cart
function applyTaxToItem(user) {
  const {cart} = user
  const taxRate = 0.1
  const updatedCart = cart.map(item => ({
    ...item,
    price: item.price * (1+taxRate)
  }))
  return Object.assign({}, user, {cart: updatedCart});
}

// move the items in the cart to purchases
function buyItem(user) {
  return {
    ...user,
    purchases: [...user.cart]
  };
}

// empty the cart
function emptyCart(user) {
  return {
    ...user,
    cart: [],
  }
}

