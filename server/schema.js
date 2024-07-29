// schema.js
import { gql } from 'apollo-server';

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
    description: String
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
  }

  input CreateProductInput {
    name: String!
    price: Float!
    description: String
  }

    input UpdateProductInput {
    id: ID!
    name: String
    price: Float
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product
    updateProduct(input: UpdateProductInput!): Product!
    deleteProduct(id: ID!): Product!
  }

`;

export default typeDefs;
