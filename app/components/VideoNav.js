"use client"
import React, { useState } from 'react';

export default function VideoNav() {
  const [selectedCamera, setSelectedCamera] = useState('cameraOption1');

  const handleCameraOptionClick = (camera) => {
    setSelectedCamera(camera);
  };

  return (
    <div className="flex flex-col-reverse md:flex-row-reverse">
      <div className="w-5/5 md:w-2/5 text-white p-4 h-full">
        <div className="h-full overflow-y-auto flex md:flex-col flex-row flex-wrap gap-6 pt-5">
          
          <div
            className={`camera-option cursor-pointer mb-2 px-2 rounded text-sm hover:bg-slate-600 ${
              selectedCamera === 'cameraOption1' ? 'bg-gray-400 text-white' : ' text-white'
            }`}
            onClick={() => handleCameraOptionClick('cameraOption1')}
          >
            Camera Rm 1
          </div>
          <div
            className={`camera-option cursor-pointer mb-2 px-2 rounded text-sm hover:bg-slate-600 ${
              selectedCamera === 'cameraOption2' ? 'bg-gray-400 text-white' : ' text-white'
            }`}
            onClick={() => handleCameraOptionClick('cameraOption2')}
          >
            Camera Rm 2
          </div>
          <div
            className={`camera-option cursor-pointer mb-2 px-2 rounded text-sm hover:bg-slate-600 ${
              selectedCamera === 'cameraOption3' ? 'bg-gray-400 text-white' : ' text-white'
            }`}
            onClick={() => handleCameraOptionClick('cameraOption3')}
          >
            PlayRoom
          </div>
          <div
            className={`camera-option cursor-pointer mb-2 px-2 rounded text-sm hover:bg-slate-600   ${
              selectedCamera === 'cameraOption4' ? 'bg-gray-400 text-white' : ' text-white'
            }`}
            onClick={() => handleCameraOptionClick('cameraOption4')}
          >
            Garden
          </div>
          <div
            className={`camera-option cursor-pointer mb-2 px-2 rounded text-sm  hover:bg-slate-600 ${
              selectedCamera === 'cameraOption5' ? 'bg-gray-400 text-white' : ' text-white'
            }`}
            onClick={() => handleCameraOptionClick('cameraOption5')}
          >
            Camera Corner
          </div>
          
        </div>
      </div>
      <div className="w-5/5 md:w-3/5">
        <div className="border border-slate-500 p-4 h-[395px] rounded-xl">
          {selectedCamera === 'cameraOption1' && (
            <img src="/assets/cam1.jpeg" alt="Camera Option 1" className="w-full h-[100%]" />
          )}
          {selectedCamera === 'cameraOption2' && (
            <img src="/assets/cam2.jpeg" alt="Camera Option 2" className="w-full h-[100%]" />
          )}
          {selectedCamera === 'cameraOption3' && (
            <img src="/assets/cam3.jpeg" alt="Camera Option 3" className="w-full h-[100%]" />
          )}
          {selectedCamera === 'cameraOption4' && (
            <img src="/assets/cam4.jpeg" alt="Camera Option 4" className="w-full h-[100%]" />
          )}
          {selectedCamera === 'cameraOption5' && (
            <img src="/assets/cam5.jpeg" alt="Camera Option 5" className="w-full h-[100%]" />
          )}
         
        </div>
      </div>
    </div>
  );
}
