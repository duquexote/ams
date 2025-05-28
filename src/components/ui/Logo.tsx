import React from 'react';
import { Scale } from 'lucide-react';

interface LogoProps {
  variant?: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-primary-950';
  const iconColor = variant === 'light' ? 'text-secondary-300' : 'text-secondary-500';

  return (
    <div className="flex items-center">
      <Scale className={`w-8 h-8 mr-2 ${iconColor}`} />
      <span className={`text-2xl font-serif font-bold ${textColor}`}>
        AMS <span className="text-sm font-sans font-normal">Advogados</span>
      </span>
    </div>
  );
};

export default Logo;