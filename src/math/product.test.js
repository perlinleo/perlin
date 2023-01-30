const product = require('./product.js');

test('multiplies 3 and 3 to be equal 9', () => {
    expect(product(3, 3)).toBe(9);
});