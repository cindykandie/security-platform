import React from 'react';

function HeaderSection() {
  return (
    <div className="flex items-center py-8 bg-slate-500 bg-opacity-5 rounded-xl m-4 justify-between p-2">
      {/* Image */}
      <img
        src="/assets/securecam.svg" 
        alt="Header Image"
        className="w-[50%] h-24 rounded-full mb-4"
      />
        <div>
            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Highest Level of Protection</h1>

            {/* Subtitle */}
            <h2 className="text-lg text-gray-600 mb-4">compiled client and server successfully i</h2>

            {/* Unordered List */}
            <ul className="list-disc list-inside flex gap-4">
            <li className="text-green-500">Micromanagement</li>
            <li className="text-green-500">Management</li>
            </ul>
        </div>
      
    </div>
  );
}

export default HeaderSection;
