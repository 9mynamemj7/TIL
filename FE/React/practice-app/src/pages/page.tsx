import React, { Fragment } from 'react';
import NowTime from '../components/NowTime';
import User from '../components/User';


export function First() {
  return (
    <Fragment>
      <h2>
        it is <NowTime />
      </h2>
    </Fragment>
  )
};

export function Second() {
  return (
    <div>
      <User />
    </div>
  )
}