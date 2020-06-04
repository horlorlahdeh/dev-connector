import React, { Fragment } from 'react';
import spinner from './spinner.svg';

export default () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt='Loading...'
        style={{
          width: '200px',
          margin: 'auto',
          display: 'block',
          alignSelf: 'center',
        }}
      />
    </Fragment>
  );
};
