import React, { Component } from 'react';
import './AboutMe.scss';

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={'aboutMe'}>
        <div className={'me'}>ABOUT ME</div>
        <div className={'me1'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
          non, dolorem, cumque, distinctio magnl quam expedita velit laborum
          sunt amet facere tempora ut fuga aliquam ad sa Sapiente, exercitati.
        </div>
      </div>
    );
  }
}

export default AboutMe;
