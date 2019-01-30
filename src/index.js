const { GraphQLServer } = require('graphql-yoga');
const { find, isEqual, remove } = require('lodash');

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
    link: (parent, args) => find(links, (link) => isEqual(args.id, link.id)),
  },
  Mutation: {
    postLink: (parent, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      };
      links.push(link);
      return link;
    },
    updateLink: (parent, args) => {
      const link = find(links, { id: args.id });
      if (args.description) {
        link.description = args.description;
      }
      if (args.url) {
        link.url = args.url;
      }
      return link;
    },
    deleteLink: (parent, args) => {
      return remove(links, (link) => isEqual(args.id, link.id))[0]; 
    }
  }
}

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
});

server.start(() => console.log(`Listening on http://localhost:4000`));
