import React from 'react';

const FaceRecognition = ({ image, celebrity }) => {
  return (
    <div className="center ma3">
      {image ? (
        <div
          id="image"
          className={'pa3 bg-white'}
          style={{ width: 'max-content' }}
        >
          <p className="f3 b ttc">{celebrity ? celebrity : 'Sorry No Idea'}</p>
          <img src={image} alt="Image" width="600px" height="auto" />
        </div>
      ) : (
        <p>Enter image url and click detect</p>
      )}
    </div>
  );
};

export default FaceRecognition;
