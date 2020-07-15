import React from 'react';

const Hoc = (WrappedComponent) => {
  return (props) => {
    return (
      <div className="red">
        <WrappedComponent {...props} />
      </div>
    );
  }
}

export default Hoc;