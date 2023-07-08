const products = [
  {
    id: '1',
    description: 'MacBook Pro',
    price: 5399.99,
  },
  {
    id: '2',
    description: 'iPhone 11 Pro',
    price: 5999.99,
  },
];

function getAllProducts() {
  return products;
}

module.exports = {
  getAllProducts,
};
