import React from 'react';
import { graphql } from 'react-apollo';
import BLOCKS_QUERY from './blocksQuery';

export default function withBlocks(Component) {
  class Blocks extends Component {
    render() {
      return <Component {...this.props} />;
    }
  };
  return graphql(BLOCKS_QUERY)(Blocks);
}


