import React from 'react';
import './Loading.css'; // Make sure to create this CSS file

const LoadingComponent = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingComponent;
