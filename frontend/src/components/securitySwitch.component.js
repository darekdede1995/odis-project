import React from 'react';

function SecuritySwitch(props) {
  return (
    <div className="security__container">
      <button onClick={props.toggleSecure}>
        {props.isSecure ? 'SECURE' : 'UNSECURE'}
      </button>
    </div>
  );
}

export default SecuritySwitch;
