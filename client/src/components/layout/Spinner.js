import React, { Fragment } from 'react';
import spinner from './spinner.svg';

export default () => {
  return (
    <Fragment style={{ display: 'flex', height: '100vh' }}>
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
