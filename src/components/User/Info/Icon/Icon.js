import React, { Component } from 'react';
import './Icon.scss';
import icon from '../../../../assets/avatar.jpg';

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={'icon'}>
        <img src={icon} alt={'icon'} />
      </div>
    );
  }
}

export default Icon;
