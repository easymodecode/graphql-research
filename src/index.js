const { GraphQLServer } = require('graphql-yoga');

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

let idCount = links.length;

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
  },
  Mutation: {
    post: (parent, args) => {
      const link = {
        id: `link-${idCount++}`,
        descirption: args.description,
        url: args.url,
      };
      links.push(link);
      return link;
    },
  },
};

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
});

server.start(() => console.log(`Listening on http://localhost:4000`));
