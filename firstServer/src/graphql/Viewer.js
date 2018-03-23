import {
  GraphQLObjectType
} from 'graphql';

import { blocksQuery } from './Blocks/blockQueries';

export default new GraphQLObjectType({
  name: 'Viewer',
  fields: () => ({
    blocksQuery
  })
})