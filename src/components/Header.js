import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div>
      <Image src="/logo.png" alt="Logo de la empresa" width={200} height={150} />
    </div>
  );
};

export default Header;
