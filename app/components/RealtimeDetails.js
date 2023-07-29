import React from 'react';

function RealtimeDetails() {
  return (
    <div className="details-section  rounded text-xs ml-4">
      
      <div className="detail-item flex flex-col mb-2">
        <span className="detail-label font-bold mr-0">Managed by:</span>
        <span className="detail-value">10.1.1.30</span>
      </div>
      <div className="detail-item flex flex-col mb-2">
        <span className="detail-label font-bold mr-2">Server Connected:</span>
        <span className="detail-value">less than one minute</span>
      </div>
      <div className="detail-item flex flex-col mb-2">
        <span className="detail-label font-bold mr-2">Version:</span>
        <span className="detail-value">11.9.0.241</span>
      </div>
    </div>
  );
}

export default RealtimeDetails;
