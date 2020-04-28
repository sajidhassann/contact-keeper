import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <Fragment>
    <img src={spinner} alt='Loading...' style={sheet} />
  </Fragment>
);

const sheet = {
  display: 'block',
  margin: 'auto',
  width: '200px'
};

export default Spinner;
