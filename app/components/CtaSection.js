import React from 'react';

// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faCog, faAddressCard } from '@fortawesome/free-solid-svg-icons';

function CtaSection() {
  return (
    <div className="flex justify-between space-x-6">
      
      <div className="">
        <FontAwesomeIcon icon={faDesktop} className="text-xl w-[1rem]" />
        
      </div>
      <div className="cta-item">
        <FontAwesomeIcon icon={faCog} className="text-xl w-[1rem]" />
        
      </div>

      <div className="">
        <FontAwesomeIcon icon={faAddressCard} className="text-xl w-[1rem]" />
        
      </div>
    </div>
  );
}

export default CtaSection;
