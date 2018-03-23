import {
  GraphQLObjectType
} from 'graphql';

import { blocksQuery } from './Block/blockQueries';

export default new GraphQLObjectType({
  name: 'Viewer',
  fields: () => ({
    blocksQuery
  })
})