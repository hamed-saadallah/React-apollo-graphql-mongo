import React from 'react';

const enhanceComponent = (Component, data) =>
  class Enhance extends React.Component {
    render() {
      return (
        <Component
          {...data}
          {...this.props}
        />
      )
    }
  };

export default enhanceComponent;