import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Desc from './Desc/Desc';
import './List.scss';

List.propTypes = {
  year: PropTypes.number,
  desc: PropTypes.array,
};

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: props.year,
      desc: props.desc,
    };
  }
  render() {
    return (
      <div className={'list'}>
        <div className={'year'}>{this.state.year}</div>
        {this.state.desc.map((value) => (
          <Desc key={value.born} born={value.born} bornDesc={value.bornDesc} />
        ))}
      </div>
    );
  }
}

export default List;
