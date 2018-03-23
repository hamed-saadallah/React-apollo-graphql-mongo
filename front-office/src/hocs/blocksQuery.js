import gql from 'graphql-tag';

const BLOCKS_QUERY = gql`
  query newData  {
    viewer{
      blocksQuery{
        blocks{
          _id,
          path,
          title,
          description,
          image
        }
      }
    }
  }
`;

export default BLOCKS_QUERY;