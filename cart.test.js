const cart = require('./cart');
const cars = require('./data/cars.js');

// Test cases for the two properties in Cart
describe('Cart Properties:', function () {
  test('Cart should default to an empty array.', function () {
    // check to see if the cart is an array type
    expect(Array.isArray(cart.cart)).toEqual(true);
    // check to see if the cart has 0 elements in the array
    expect(cart.cart.length).toEqual(0);
  });

  test('Total should be 0.', function () {
    expect(cart.total).toEqual(0);
  })
});

// Test cases for the three methods in Car
describe('Cart Methods:', function () {
  // Runs after each test
  afterEach(function () {
    // reset cart to empty array
    cart.cart = [];
    // reset total property
    cart.total = 0;
  })

  test('addtoCart() should add a car object to the cart array.', function () {
    cart.addToCart(cars[0]);
    cart.addToCart(cars[1]);
    cart.addToCart(cars[2]);

    expect(cart.cart.length).toEqual(3);
    expect(cart.cart[0]).toEqual(cars[0]);
    expect(cart.cart[1]).toEqual(cars[1]);
    expect(cart.cart[2]).toEqual(cars[2]);
  });

  test('removeFromCart() should decrease the total property.', function () {
    cart.addToCart(cars[0]);
    cart.addToCart(cars[10]);
    cart.addToCart(cars[5]);

    cart.removeFromCart(0, cars[0].price);
    cart.removeFromCart(9, cars[10].price);

    expect(cart.total).toEqual(cars[5].price);
  });

  test('checkout() should empty the cart array and set total to 0.', function () {
    cart.addToCart(cars[0]);
    cart.addToCart(cars[1]);
    cart.addToCart(cars[2]);
    cart.addToCart(cars[3]);

    cart.checkout();

    expect(cart.cart.length).toEqual(0);
    expect(cart.total).toEqual(0);
  })

});