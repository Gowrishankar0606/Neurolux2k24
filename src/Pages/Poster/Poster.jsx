import React from 'react';

const Poster = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-600">
      <div className="w-full h-full flex justify-center items-center">
        <img
          src="./src/assets/Poster.jpeg"
          alt="poster"
          className="max-w-4xl max-h-4xl"
          height={600}
          width={600}
        />
      </div>
    </div>
  );
};

export default Poster;
 