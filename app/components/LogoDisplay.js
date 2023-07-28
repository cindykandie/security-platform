import React from 'react';
import Image from 'next/image';
import logo from '/public/assets/logo.svg'; 

function LogoDisplay() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image src={logo} alt="Oniex" width={30} height={100} />
        <h1 style={{ marginLeft: '10px', fontSize: '24px' }}>Oniex</h1>
      </div>
      <p style={{ fontSize: '10px' }}>Emergency Security</p>
    </div>
  );
}

export default LogoDisplay;
