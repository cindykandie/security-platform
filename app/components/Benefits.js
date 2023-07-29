import React from 'react';

function Benefits() {
  return (
    <div className="flex flex-col md:flex-row justify-between p-4 gap-3 text-sm">
      <div className="benefit-item md:w-1/3 mb-4 md:mb-0  bg-slate-500 bg-opacity-5 p-2 rounded-xl">
        <h3 className="text-md font-bold">Small Explanation</h3>
        <p className="text-gray-600 text-sm mt-1">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="benefit-item md:w-1/3 mb-4 md:mb-0  bg-slate-500 bg-opacity-5 p-2 rounded-xl">
        <h3 className="text-md font-bold">Network Monitoring</h3>
        <p className="text-gray-600 text-sm mt-1">Praesent in elit eu metus feugiat consequat.</p>
      </div>
      <div className="benefit-item md:w-1/3  bg-slate-500 bg-opacity-5 p-2 rounded-xl">
        <h3 className="text-md font-bold">Backup</h3>
        <p className="text-gray-600 text-sm mt-1">Fusce venenatis sem id semper bibendum.</p>
      </div>
    </div>
  );
}

export default Benefits;
