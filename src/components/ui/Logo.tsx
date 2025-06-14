import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = () => {


  return (
    <div className="flex items-center">
      <img src="/logo.png" alt="AMS Advogados" className="h-16 mr-6 mt-2 mb-2" />
    </div>
  );
};

export default Logo;