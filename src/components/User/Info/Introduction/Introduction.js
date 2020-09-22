import React, { Component } from 'react';
import './Introduction.scss';

class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={'introduction'}>
        <div>HELLO, </div>
        <div>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</div>
      </div>
    );
  }
}

export default Introduction;
