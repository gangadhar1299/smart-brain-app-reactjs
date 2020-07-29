import React from 'react';

const Navigation = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <p className={'code link dim white pa3 pointer'}>Logout</p>
    </nav>
  );
};

export default Navigation;
