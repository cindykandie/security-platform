"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logoMonitoring from '/public/assets/monitoring.svg';
import logoSecurityCamera from '/public/assets/security.svg'; 
import logoUpdate from '/public/assets/update.svg'; 
import logoLicense from '/public/assets/license.svg'; 
import '../custom-css/nav.css'

const Navbar = () => {
  const [selectedPage, setSelectedPage] = useState('Monitoring');

  const handlePageSelection = (page) => {
    setSelectedPage(page);
  };

  return (
    <nav>
      <ul className="navbar text-sm flex flex-col gap-5">
        <li className={selectedPage === 'Monitoring' ? 'active' : ''} onClick={() => handlePageSelection('Monitoring')}>
          <Link className='flex gap-3 relative' href="/">
           
              <Image src={logoMonitoring} alt="Monitoring Logo" width={20} height={20} />
              Monitoring
              {selectedPage === 'Monitoring' && <span className="arrow" />}
          
          </Link>
        </li>
        <li className={selectedPage === 'Security Camera' ? 'active' : 'w-full'} onClick={() => handlePageSelection('Security Camera')}>
          <Link className='flex gap-3' href="/securitycamera">
          
              <Image src={logoSecurityCamera} alt="Security Camera Logo" width={20} height={20} />
              Security Camera
              {selectedPage === 'Security Camera' && <span className="arrow" />}
            
          </Link>
        </li>
        <li className={selectedPage === 'Update' ? 'active' : ''} onClick={() => handlePageSelection('Update')}>
          <Link className='flex gap-3' href="/update">
            
              <Image src={logoUpdate} alt="Update Logo" width={20} height={20} />
              Update
              {selectedPage === 'Update' && <span className="arrow" />}
            
          </Link>
        </li>
        <li className={selectedPage === 'License' ? 'active' : ''} onClick={() => handlePageSelection('License')}>
          <Link className='flex gap-3' href="/license">
            
              <Image src={logoLicense} alt="License Logo" width={20} height={20} />
              License
              {selectedPage === 'License' && <span className="arrow" />}
            
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

