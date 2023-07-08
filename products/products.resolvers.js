const productsModel = require('./products.model');

module.exports = {
  Query: {
    products: () => productsModel.getAllProducts(),
    productsByPriceRange: (_, args) => productsModel.getProductsByPrice(args.min, args.max),
    product:(_, args) => productsModel.getProductById(args.id)
  },
  Mutation: {
    addNewProduct: (_, args) => productsModel.addNewProduct(args.id,args.description,args.price),
    addProductReview: (_, args) => productsModel.addProductReview(args.id,args.rating,args.comment)
  },
};
