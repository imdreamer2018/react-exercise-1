import React, { Component } from 'react';
import AboutMe from './AboutMe/AboutMe';
import Education from './Education/Education';

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={'description'}>
        <AboutMe />
        <Education />
      </div>
    );
  }
}

export default Description;
