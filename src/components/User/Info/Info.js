import React, { Component } from 'react';
import Icon from './Icon/Icon';
import Introduction from './Introduction/Introduction';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={'info'}>
        <Icon />
        <Introduction />
        <hr />
      </div>
    );
  }
}

export default Info;
