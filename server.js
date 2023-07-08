const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const schema = buildSchema(`
  type  Query {
  products: [Product]
  orders:[Order]
  }

  type Review {
    rating: Int!
    comment: String
    }

  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
    reviews: [Review]
    }

    type Order {
        date: String!
        subtotal: Float!
        items: [OrderItem]
    }

    type OrderItem {
        product: Product!
        quantity: Int!
    }
`);

const root = {
  products: [
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
  ],
  orders: [
    {
      date: '2020-01-01',
      subtotal: 11399.98,
      items: [
        {
          product: {
            id: '1',
            description: 'MacBook Pro',
            price: 5399.99,
          },
          quantity: 1,
        },
        {
          product: {
            id: '2',
            description: 'iPhone 11 Pro',
            price: 5999.99,
          },
          quantity: 1,
        },
      ],
    },
  ],
};

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
