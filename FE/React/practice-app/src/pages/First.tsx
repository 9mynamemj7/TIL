import React, { Fragment } from 'react';
import NowTime from '../components/NowTime';

const user = {
  firstName : 'Rose',
  lastName : 'Taylor'
};

const element = <h1>Hello, {user.firstName} {user.lastName}</h1>;

class First extends React.Component {
  render() {
    return (
      <Fragment>
        <h2>
          {element} it is <NowTime />
        </h2>
      </Fragment>
    )
  }
};
export default First;