import React from 'react';

const NowTime = () => {
  return (
    <div>
      {new Date().toLocaleTimeString()}
    </div>
  );
};

export default NowTime