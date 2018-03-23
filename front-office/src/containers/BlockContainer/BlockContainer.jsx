import React, { Component } from 'react';
import { get } from 'lodash';

import Page from '../../components/Page';

class BlockContainer extends Component {

  render(){
    const blocksList = get(this.props, 'data.viewer.blocksQuery.blocks', []);
    return (
      blocksList.map(item => 
        <Page colorTitle="blue" colorText="gray" float="left" key={item._id}>
          {item}
        </Page>
      )
    );
  }
}

export default BlockContainer;