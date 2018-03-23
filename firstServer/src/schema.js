import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import ViewerType from './graphql/Viewer';
const RootQuery = new GraphQLObjectType({
  name: 'Root',
  description: 'The root query type.',
  fields: () => ({
    viewer: {
      type: ViewerType,
      args: {},
      resolve: () => ({}),
    },
  }),
});


export default new GraphQLSchema({
  query: RootQuery
});