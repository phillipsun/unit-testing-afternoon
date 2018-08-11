const cars = require('./data/cars');

module.exports = {
  // set initial state of cart to empty array
  // and set total to 0
  cart: [],
  total: 0,

  addToCart: function (car) {
    // add car to cart
    this.cart.push(car);
    // add price of car to cart total
    this.total += car.price;
  },

  removeFromCart: function (index, price) {
    // remove item from cart array
    this.cart.splice(index, 1);
    // subtract item from cart total  
    this.total -= price;
  },

  checkout: function () {
    // empty cart array
    // and set total to 0
    this.cart = [];
    this.total = 0;
  }
};