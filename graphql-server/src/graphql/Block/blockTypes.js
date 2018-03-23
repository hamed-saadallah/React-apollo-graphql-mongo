import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
} from 'graphql';

const BlockType = new GraphQLObjectType({
  name: 'Block',
  fields:{
    _id: {type: GraphQLString},
    path: {type: GraphQLString},
    title: {type: GraphQLString},
    description: {type: GraphQLString},
    image: {type: GraphQLString},
  }
});

const BlockInputType = new GraphQLInputObjectType({
  name: 'BlockInput',
  fields:{
    _id: {type: GraphQLString},
    path: {type: GraphQLString},
    title: {type: GraphQLString},
    description: {type: GraphQLString},
    image: {type: GraphQLString},
  }
});

const BlocksType = new GraphQLObjectType({
  name: 'Blocks',
  fields: {
    blocks: { type: new GraphQLList(BlockType) }
  }
});
export {
  BlocksType,
  BlockInputType,
  BlockType,
}