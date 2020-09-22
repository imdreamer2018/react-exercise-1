import React, { Component } from 'react';
import Info from './Info/Info';
import Description from './Description/Description';
import './User.scss';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={'user'}>
        <Info />
        <Description />
      </div>
    );
  }
}

export default User;
