// resolvers.js
import Product from './models/Product.js';

const resolvers = {
  Query: {
    products: async () => {
      return await Product.find();
    },
    product: async (_, { id }) => {
      return await Product.findById(id);
    },
  },
  Mutation: {
    createProduct: async (_, { input }) => {
      const product = new Product(input);
      await product.save();
      return product;
    },
    updateProduct: async (_, { input }) => {
        const product = await Product.findByIdAndUpdate(input.id, input, { new: true });
        return product;
      },
      deleteProduct: async (_, { id }) => {
        const product = await Product.findByIdAndDelete(id);
        return product;
      },
  },
};

export default resolvers;
