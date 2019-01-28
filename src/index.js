const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
type Query {
  info: String!
  feed: [Link!]!
}

type Link {
  id: ID!
  description: String!
  url: String!
}
`;

let links = [
  {
    id: 'link-0',
    url: 'www.howtographql0.com',
    description: 'Fullstack tutorial for GraphQL0',
  },
  {
    id: 'link-1',
    url: 'www.howtographql.com1',
    description: 'Fullstack tutorial for GraphQL1',
  },
  {
    id: 'link-2',
    url: 'www.howtographql.com2',
    description: 'Fullstack tutorial for GraphQL2',
  },
  {
    id: 'link-3',
    url: 'www.howtographql.com3',
    description: 'Fullstack tutorial for GraphQL3',
  },
];

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
