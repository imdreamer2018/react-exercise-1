import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Desc.scss';

Desc.propTypes = {
  born: PropTypes.string,
  bornDesc: PropTypes.string,
};

class Desc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      born: props.born,
      bornDesc: props.bornDesc,
    };
  }

  render() {
    return (
      <div className={'desc'}>
        <div className={'born'}>{this.state.born}</div>
        <div className={'bornDesc'}>{this.state.bornDesc}</div>
      </div>
    );
  }
}

export default Desc;
