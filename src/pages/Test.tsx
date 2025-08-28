import React from 'react';

const Test = () => {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          React Test Page
        </h1>
        <p className="text-gray-600">
          If you can see this, React is working!
        </p>
        <div className="mt-4 p-4 bg-green-100 rounded">
          <p className="text-green-800">
            ✅ React is rendering successfully
          </p>
        </div>
      </div>
    </div>
  );
};

export default Test;
