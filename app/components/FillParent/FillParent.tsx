import React from 'react';

const style: React.CSSProperties = {
  width: '100%',
  height: '100%',
};

/**
 * A DOM container that expands to fill 100% of its parent.
 */
const FillParent: React.FC = ({ children }) => {
  return <div style={style}>{children}</div>;
};

export default FillParent;
