import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import {browserHistory} from 'react-router';

const propTypes = {
  location: PropTypes.object.isRequired,
};

function PageNotFound({ location }) {
  let styles={
    h1:{
      backgroundColor: 'rgb(0, 188, 212)',
      lineHeight:'75px',
      textAlign:'center',
      color:'#fff',
      boxShadow: 'rgba(0, 0, 0, 0.15) 0px 1px 6px, rgba(0, 0, 0, 0.15) 0px 1px 4px'
    },
    p:{
      margin:'20px auto',
      textAlign:'center',
      color:'#777'
    },
    smallIcon: {
      width: 32,
      height: 32,
    },
    small: {
      width: 52,
      height: 52,
      padding: 10,
      position:'absolute',
      top:'10px',
      right:'10px',
    },
  };
  return (
    <div>
      <h1 style={styles.h1}>404</h1>
      <p style={styles.p}>
        Page not found - the path, <code>{location.pathname}</code>,
        did not match any React Router routes.
      </p>
    </div>
  );
}

PageNotFound.propTypes = propTypes;

export default PageNotFound;
